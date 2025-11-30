// ClashGame.js
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
                shards={shards}
                data={data}
            />
        </div>
    );
}

export default ClashGame;
