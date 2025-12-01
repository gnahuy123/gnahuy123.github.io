// ClashGame.js
import React from 'react';
import ClashCard from "./ClashCard";
import ClashBackground from "./ClashBackground";

function ClashGame({data}) {
    // State is now managed in AppContext

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <ClashBackground />
            <ClashCard data={data} />
        </div>
    );
}

export default ClashGame;