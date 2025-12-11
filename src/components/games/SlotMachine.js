// SlotMachine.jsx
import React, { useState, useEffect } from "react";
import "./SlotMachine.css";
import { useAppContext } from "../../context/AppContext";
import coin from "../../assets/images/coin.png";
import funFactData from "../../data/funFactData.js";

const symbols = ["🐗", "👨🏿", "🔨"];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

export default function SlotMachine() {
    const [reels, setReels] = useState(["❔", "❔", "❔"]);
    const [spinning, setSpinning] = useState(false);
    const [message, setMessage] = useState("Click SPIN to play!");
    const [messageSeverity, setMessageSeverity] = useState("neutral");
    const { coins, setCoins, triggerGameEvent } = useAppContext();
    const [unlockedFacts, setUnlockedFacts] = useState([]);

    //Randomly sorts the fun facts
    useEffect(() => {
        funFactData.sort(() => Math.random() - 0.5);
    }, [])

    const handleCost = () => {
        if (coins < 1) {
            setMessage("Not enough coins!");
            setMessageSeverity("failure");
            return false;
        };
        setCoins(coins - 1);
        return true;
    }

    const handleSpin = () => {
        if (spinning) return;
        if (!handleCost()) return;
        setSpinning(true);
        setMessage("Spinning...");
        setMessageSeverity("neutral");

        // Simple fake spin: change symbols quickly for 700ms, then stop
        const interval = setInterval(() => {
            setReels([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()])
        }, 80);

        setTimeout(() => {
            clearInterval(interval);

            const finalReels = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

            if (Math.random() > 0.67) {
                finalReels[1] = finalReels[0];
                finalReels[2] = finalReels[0];
            }
            setReels(finalReels);

            const isWin = finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2];
            setMessage(isWin ? "You win! 🎉" : "No luck, try again.");

            if (isWin) {
                // Get next fact index
                const nextIndex = (unlockedFacts.length) % funFactData.length;
                const newFact = funFactData[nextIndex];

                // Add to list (newest first)
                setUnlockedFacts(prev => [newFact, ...prev]);
            }

            setMessageSeverity(isWin ? "success" : "neutral");
            triggerGameEvent(isWin ? 'win' : 'lose');
            setSpinning(false);
        }, 700);
    };

    return (
        <div className="slot-machine">
            <div className="slot-machine-header">Fun Fact Slot Machine</div>
            <div className="slot-machine-description">Collect coins then spin the reels to reveal a fun fact about me!</div>
            <div className="machine-interface">
                <div className={`reels ${spinning ? "reels--spinning" : ""}`}>
                    {reels.map((symbol, i) => (
                        <div key={i} className="reel">
                            <span>{symbol}</span>
                        </div>
                    ))}
                </div>

                <div className="lever-container" onClick={!spinning ? handleSpin : undefined}>
                    <div className="cost-label">
                        1 <img src={coin} alt="coin" className="cost-icon" />
                    </div>
                    <div className="lever-base"></div>
                    <div className={`lever-arm ${spinning ? "lever-arm--pulled" : ""}`}>
                        <div className="lever-stick"></div>
                        <div className="lever-knob"></div>
                    </div>
                </div>
            </div>

            {/* 
            <button onClick={handleSpin} disabled={spinning} className="slot-machine-button">
                {spinning ? "Spinning..." : "SPIN!"}
                <div className="coin-container">
                    <img src={coin} alt="Coin" />
                </div>
            </button> 
            */}
            <p className={`message message--${messageSeverity}`}>{message}</p>

            {/* Fun Fact List */}
            {unlockedFacts.length > 0 && (
                <div className="fun-fact-list">
                    <h3>Unlocked Facts:</h3>
                    <ul>
                        {unlockedFacts.map((fact, index) => (
                            <li key={index} className="fun-fact-item">{fact}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
