import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [coins, setCoins] = useState(0);
    const [shards, setShards] = useState(0);
    const [activeTab, setActiveTab] = useState('experience');
    const [lastGameEvent, setLastGameEvent] = useState(null); // { type: 'win' | 'lose', id: number }
    const [isMuted, setIsMuted] = useState(true);

    const incrementCoins = (amount = 1) => setCoins(prev => prev + amount);
    const incrementShards = (amount = 1) => setShards(prev => prev + amount);
    const triggerGameEvent = (type) => setLastGameEvent({ type, id: Date.now() });
    const toggleMute = () => setIsMuted(prev => !prev);

    return (
        <AppContext.Provider value={{
            coins,
            setCoins,
            incrementCoins,
            shards,
            setShards,
            incrementShards,
            activeTab,
            setActiveTab,
            lastGameEvent,
            triggerGameEvent,
            isMuted,
            toggleMute
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};