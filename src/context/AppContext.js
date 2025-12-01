import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [coins, setCoins] = useState(0);
    const [shards, setShards] = useState(0);
    const [activeTab, setActiveTab] = useState('experience');

    const incrementCoins = (amount = 1) => setCoins(prev => prev + amount);
    const incrementShards = (amount = 1) => setShards(prev => prev + amount);

    return (
        <AppContext.Provider value={{
            coins,
            setCoins,
            incrementCoins,
            shards,
            setShards,
            incrementShards,
            activeTab,
            setActiveTab
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