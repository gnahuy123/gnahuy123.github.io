import React from 'react';
import '../Page.css';

const LiftSim = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Lift Simulation</h1>
            </header>
            <section>
                <p>Have you ever wondered why lifts are so slow? This is a simulation of different lift algorithms and comparisons of their performance.</p>
                <a href="https://github.com/gnahuy123/liftSim" target="_blank" rel="noopener noreferrer" className="download-button">View Project</a>
            </section>
        </div>
    );
};

export default LiftSim;
