import React from 'react';
import './ClashBackground.css';
import { useAppContext } from '../../context/AppContext';
import { useFloatingItems } from '../../hooks/useFloatingItems'; // Import hook
import shardPng from '../../assets/images/shard.png';
import coinPng from '../../assets/images/coin.png';

function ClashBackground() {
    const { incrementCoins, incrementShards } = useAppContext();
    const { items, removeItem } = useFloatingItems(15);

    const handleItemClick = (e, id, type) => {
        e.stopPropagation();
        if (type === 'coin') incrementCoins();
        else incrementShards();
        removeItem(id);
    };

    return (
        <div className="clash-background">
            <div className="fog-layer"></div>
            {items.map(item => (
                <div
                    key={item.id}
                    className={`floating-item ${item.type}`}
                    style={{
                        left: `${item.startLeft}%`,
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        animationDuration: `${item.duration}s`
                    }}
                    onClick={(e) => handleItemClick(e, item.id, item.type)}
                    onAnimationEnd={() => removeItem(item.id)}
                >
                    <img
                        src={item.type === 'coin' ? coinPng : shardPng}
                        alt={item.type}
                        draggable="false"
                    />
                </div>
            ))}
        </div>
    );
}
export default ClashBackground;