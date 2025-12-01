import { useState, useEffect, useCallback } from 'react';

export const useFloatingItems = (maxItems = 15) => {
    const [items, setItems] = useState([]);

    const spawnItem = useCallback(() => {
        return {
            id: Date.now() + Math.random(),
            type: Math.random() > 0.8 ? 'shard' : 'coin',
            startLeft: Math.random() * 90,
            duration: 4 + Math.random() * 6,
            size: 30 + Math.random() * 20,
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems(current => {
                if (current.length >= maxItems) return current;
                return [...current, spawnItem()];
            });
        }, 800);
        return () => clearInterval(interval);
    }, [spawnItem, maxItems]);

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    return { items, removeItem };
};