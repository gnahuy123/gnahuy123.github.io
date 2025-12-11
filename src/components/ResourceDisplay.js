import React from 'react';
import './ResourceDisplay.css';
import { useAppContext } from '../context/AppContext';
import shardPng from '../assets/images/shard.png';
import coinPng from '../assets/images/coin.png';

const ResourceDisplay = () => {
    const { coins, shards } = useAppContext();
    const [coinPulse, setCoinPulse] = React.useState(false);
    const [shardPulse, setShardPulse] = React.useState(false);

    // Trigger animation when coins change
    React.useEffect(() => {
        setCoinPulse(true);
        const timer = setTimeout(() => setCoinPulse(false), 300); // Match animation duration
        return () => clearTimeout(timer);
    }, [coins]);

    // Trigger animation when shards change
    React.useEffect(() => {
        setShardPulse(true);
        const timer = setTimeout(() => setShardPulse(false), 300);
        return () => clearTimeout(timer);
    }, [shards]);

    return (
        <div className="resource-display-container">
            <div className={`coin-bar ${coinPulse ? 'pulse-animation' : ''}`}>
                <img src={coinPng} alt="Gold" className="resource-icon" />
                <span className="resource-value">{coins}</span>
            </div>
            <div className={`shards-bar ${shardPulse ? 'pulse-animation' : ''}`}>
                <img src={shardPng} alt="Shards" className="resource-icon" />
                <span className="resource-value">{shards}</span>
            </div>
        </div>
    );
};

export default ResourceDisplay;