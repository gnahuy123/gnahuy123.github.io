import React from 'react';
import SlotMachine from '../components/games/SlotMachine';
import './Page.css';

const FunZone = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Fun Zone</h1>
            </header>

            <section>
                <p>Take a break and have some fun! Pull the lever to win prizes.</p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 'var(--space-8)'
                }}>
                    <SlotMachine />
                </div>
            </section>
        </div>
    );
};

export default FunZone;
