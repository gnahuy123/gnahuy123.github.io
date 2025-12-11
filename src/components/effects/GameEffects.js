import { useEffect, useRef, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
// Import audio files
import coinSound from '../../assets/audio/coin.wav';
import spendSound from '../../assets/audio/spend.wav';
import winSound from '../../assets/audio/win.wav';
import loseSound from '../../assets/audio/lose.wav';

const GameEffects = () => {
    const context = useAppContext();
    const { coins, shards } = context;
    const prevCoins = useRef(coins);
    const prevShards = useRef(shards);

    // Audio references
    const coinAudio = useRef(new Audio(coinSound));
    const spendAudio = useRef(new Audio(spendSound));
    const winAudio = useRef(new Audio(winSound));
    const loseAudio = useRef(new Audio(loseSound));

    // Helper to play sound safely
    const playSound = useCallback((audioRef) => {
        if (context.isMuted) return; // Mute check
        try {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.warn("Audio play failed (user interaction needed?):", e));
        } catch (e) {
            console.error("Audio error:", e);
        }
    }, [context.isMuted]);

    useEffect(() => {
        // Coin Logic
        if (coins > prevCoins.current) {
            playSound(coinAudio);
        } else if (coins < prevCoins.current) {
            playSound(spendAudio);
        }
        prevCoins.current = coins;
    }, [coins, playSound]);

    useEffect(() => {
        // Shard Logic (for now reusing coin sound or specific logic if needed)
        if (shards > prevShards.current) {
            playSound(coinAudio); // Reusing coin sound for shards for now
        } else if (shards < prevShards.current) {
            playSound(spendAudio);
        }
        prevShards.current = shards;
    }, [shards, playSound]);

    // Game Event Logic (Win/Lose)
    useEffect(() => {
        if (!context.lastGameEvent) return;

        const { type } = context.lastGameEvent;
        if (type === 'win') {
            playSound(winAudio);
        } else if (type === 'lose') {
            playSound(loseAudio);
        }
    }, [context.lastGameEvent, playSound]);

    return null; // Logic only component
};

export default GameEffects;
