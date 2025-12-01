import React, { useState, useEffect, useCallback } from 'react';
import './ClashBackground.css';
import shardPng from '../../assets/images/shard.png';
import coinPng from '../../assets/images/coin.png';
import { useAppContext } from '../../context/AppContext';

const MAX_ITEMS = 15; // Limit items to prevent DOM overload

function ClashBackground() {
    const { incrementCoins, incrementShards } = useAppContext();
    const [items, setItems] = useState([]);

    // Helper to generate a random floating item
    const spawnItem = useCallback(() => {
        const id = Date.now() + Math.random();
        const type = Math.random() > 0.8 ? 'shard' : 'coin'; // 20% chance for shard, 80% for coin
        const startLeft = Math.random() * 90; // 0% to 90% width
        const duration = 4 + Math.random() * 6; // 4s to 10s float time
        const size = 30 + Math.random() * 20; // 30px to 50px

        return { id, type, startLeft, duration, size };
    }, []);

    // Spawning Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setItems(currentItems => {
                if (currentItems.length >= MAX_ITEMS) return currentItems;
                return [...currentItems, spawnItem()];
            });
        }, 800); // Spawn every 800ms

        return () => clearInterval(interval);
    }, [spawnItem]);

    // Handle Click (Collect Item)
    const handleItemClick = (e, id, type) => {
        e.stopPropagation(); // Prevent clicking through to elements behind

        // Update Context State
        if (type === 'coin') {
            incrementCoins();
        } else {
            incrementShards();
        }

        // Remove item immediately
        setItems(prev => prev.filter(item => item.id !== id));
    };

    // Remove item when animation ends (reaches top)
    const handleAnimationEnd = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
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
                    onAnimationEnd={() => handleAnimationEnd(item.id)}
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