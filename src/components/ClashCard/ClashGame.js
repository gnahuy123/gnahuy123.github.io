// ClashGame.js
import React from 'react';
import ClashCard from "./ClashCard";
// Removed local ClashBackground import as it's now global in App.js

function ClashGame({data}) {
    // State is now managed in AppContext

    return (
        <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {/* Background is now global */}
            <ClashCard data={data} />
        </div>
    );
}

export default ClashGame;