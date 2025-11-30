// ClashGame.js
import shardPng from '../../assets/images/shard.png';
import coinPng from '../../assets/images/coin.png';
import React, { useState } from 'react';
import ClashCard from "./ClashCard";
import ClashBackground from "./ClashBackground";

function ClashGame({data}) {
    const [coins, setCoins] = useState(0);
    const [shards, setShards] = useState(0);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <ClashBackground
                coins={coins}
                setCoins={setCoins}
                shards={shards}
                setShards={setShards}
            />
            <ClashCard
                coins={coins}
                setCoins={setCoins}
                shards={shards}
                setShards={setShards}
            />
        </div>
    );
}

export default ClashGame;
