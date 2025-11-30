// ClashCard.js
import React, { useState } from 'react';
import './ClashCard.css';
import shardPng from '../../assets/images/shard.png';
import coinPng from '../../assets/images/coin.png';

// Main CardDetails Component
function ClashCard({coins, shards, data}) {
    // Single state to track the current mode: 'experience', 'project', or 'blog'
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <div className="clash-card-wrapper">
            <div className="card-details-container">
                <div className="top-bar">
                    <div className="resource-bars">
                        <div className="coin-bar">
                            <img src={coinPng} alt="Gold" className="resource-icon" />
                            <span className="resource-value">{coins}</span>
                        </div>
                        <div className="shards-bar">
                            <img src={shardPng} alt="Shards" className="resource-icon" />
                            <span className="resource-value">{shards}</span>
                        </div>
                    </div>
                </div>

                <CardPreview activeTab={activeTab} />
                <CardInfo activeTab={activeTab} data={data}/>
                <GameplaySection />
                <UpgradeSection activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
}

// Card Preview Component
function CardPreview({ activeTab }) {
    const isExperience = activeTab === 'experience';
    const isProject = activeTab === 'project';
    const isBlog = activeTab === 'blog';

    // Dynamic classes based on active tab
    const spiritGlowClass = isExperience ? 'experience-glow' : isProject ? 'project-glow' : isBlog ? 'blog-glow' : '';
    const borderClass = isExperience ? 'experience-border' : isProject ? 'project-border' : isBlog ? 'blog-border' : 'normal-border';


    return (
        <div className="card-preview">
            <div className={`large-spirit ${spiritGlowClass}`}>
                <img src="https://i.imgur.com/0Z5W16z.png" alt="Large Evolved Ice Spirit" className="spirit-model" />
            </div>
            <div className={`card-art-container ${borderClass}`}>
                <img src="https://i.imgur.com/0Z5W16z.png" alt="Evolved Ice Spirit Card" className="card-art" />
                {isProject && <div className="card-label project-label">Projects</div>}
                {isBlog && <div className="card-label blog-label">Blog</div>}
                {isExperience && <div className="card-label experience-label">Experience</div>}
            </div>
        </div>
    );
}

// Card Info Component
function CardInfo({ activeTab, data}) {
    return (
        <div className="card-info">
            <h1 className="card-name">{data.personData.name}</h1>
            {activeTab === 'project' && <h2 className="project-subtitle">Projects</h2>}
            {activeTab === 'blog' && <h2 className="blog-subtitle">Blog</h2>}
            {activeTab === 'experience' && <h2 className="experience-subtitle">Experience</h2>}
        </div>
    );
}

// Gameplay Section Component
function GameplaySection() {
    return (
        <div className="gameplay-section">
            <div className="video-placeholder">
                <img src="https://i.imgur.com/1W6X28c.png" alt="Gameplay Preview" className="gameplay-image" />
                <div className="king-emote">
                    <img src="https://i.imgur.com/475B39d.png" alt="King Emote" />
                </div>
                <div className="pagination-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
}

// Upgrade Section Component
function UpgradeSection({ activeTab, setActiveTab }) {
    // Define all possible modes
    const allModes = [
        { id: 'experience', label: 'Experience', styleClass: 'btn-experience' },
        { id: 'project',    label: 'Projects',   styleClass: 'btn-project' },
        { id: 'blog',       label: 'Blog',       styleClass: 'btn-blog' }
    ];

    // Filter out the currently active mode to get the buttons to display
    const availableButtons = allModes.filter(mode => mode.id !== activeTab);

    return (
        <div className="upgrade-section">
            {availableButtons.map((btn) => (
                <button
                    key={btn.id}
                    className={`upgrade-button ${btn.styleClass}`}
                    onClick={() => setActiveTab(btn.id)}
                >
                    <div className="button-content">
                        <span className="upgrade-text">{btn.label}</span>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default ClashCard;