import React from 'react';
import SlotMachine from '../components/games/SlotMachine';
import TikTacToe from '../components/games/TikTacToe';
import './Page.css';

const FunZone = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Fun Zone</h1>
            </header>

            <section>
                <p>Take a break and have some fun!</p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 'var(--space-8)'
                }}>
                    <SlotMachine />
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 'var(--space-8)'
                }}>
                    <TikTacToe />
                </div>
            </section>
        </div>
    );
};

export default FunZone;
