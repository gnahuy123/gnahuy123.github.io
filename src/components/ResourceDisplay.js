import React from 'react';
import './ResourceDisplay.css';
import { useAppContext } from '../context/AppContext';
import shardPng from '../assets/images/shard.png';
import coinPng from '../assets/images/coin.png';

const ResourceDisplay = () => {
    const { coins, shards } = useAppContext();

    return (
        <div className="resource-display-container">
            <div className="coin-bar">
                <img src={coinPng} alt="Gold" className="resource-icon" />
                <span className="resource-value">{coins}</span>
            </div>
            <div className="shards-bar">
                <img src={shardPng} alt="Shards" className="resource-icon" />
                <span className="resource-value">{shards}</span>
            </div>
        </div>
    );
};

export default ResourceDisplay;