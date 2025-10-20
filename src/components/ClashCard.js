import React, { useState } from 'react';
import './ClashCard.css';

const ClashCard = ({ projects, blogs }) => {
    const [mode, setMode] = useState('projects');

    const DamageIcon = () => (
        <svg width="32" height="32" viewBox="0 0 32 32" className="clash-card__icon">
            <rect width="32" height="32" rx="4" fill="#FF6B35"/>
            <path d="M16 6 L10 14 L14 14 L12 26 L22 14 L18 14 L24 6 Z" fill="#FFE66D" stroke="#FF4500" strokeWidth="1"/>
        </svg>
    );

    const DPSIcon = () => (
        <svg width="32" height="32" viewBox="0 0 32 32" className="clash-card__icon">
            <rect width="32" height="32" rx="4" fill="#FF8C42"/>
            <circle cx="16" cy="16" r="8" fill="#FFE66D"/>
            <path d="M16 10 L18 14 L22 14 L19 17 L20 22 L16 19 L12 22 L13 17 L10 14 L14 14 Z" fill="#FF4500"/>
        </svg>
    );

    const HPIcon = () => (
        <svg width="32" height="32" viewBox="0 0 32 32" className="clash-card__icon">
            <rect width="32" height="32" rx="4" fill="#E63946"/>
            <path d="M16 26 C16 26, 8 20, 8 14 C8 10, 10 8, 12 8 C14 8, 15 9, 16 11 C17 9, 18 8, 20 8 C22 8, 24 10, 24 14 C24 20, 16 26, 16 26 Z" fill="#FF6B9D"/>
        </svg>
    );

    const HitSpeedIcon = () => (
        <svg width="32" height="32" viewBox="0 0 32 32" className="clash-card__icon">
            <rect width="32" height="32" rx="4" fill="#4ECDC4"/>
            <path d="M10 16 L16 8 L16 14 L22 14 L16 22 L16 16 Z" fill="#95E1D3" stroke="#2A9D8F" strokeWidth="1"/>
            <circle cx="22" cy="10" r="2" fill="#95E1D3"/>
            <circle cx="26" cy="14" r="1.5" fill="#95E1D3"/>
        </svg>
    );

    const TargetIcon = () => (
        <svg width="32" height="32" viewBox="0 0 32 32" className="clash-card__icon">
            <rect width="32" height="32" rx="4" fill="#6C757D"/>
            <circle cx="16" cy="16" r="8" fill="none" stroke="#CED4DA" strokeWidth="2"/>
            <circle cx="16" cy="16" r="5" fill="none" stroke="#CED4DA" strokeWidth="2"/>
            <circle cx="16" cy="16" r="2" fill="#CED4DA"/>
            <path d="M16 4 L16 10 M16 22 L16 28 M4 16 L10 16 M22 16 L28 16" stroke="#CED4DA" strokeWidth="2"/>
        </svg>
    );

    const SpeedIcon = () => (
        <svg width="32" height="32" viewBox="0 0 32 32" className="clash-card__icon">
            <rect width="32" height="32" rx="4" fill="#8D6E63"/>
            <path d="M8 20 L12 12 L16 16 L20 8 L24 20 Z" fill="none" stroke="#D7CCC8" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" fill="#D7CCC8"/>
            <circle cx="20" cy="8" r="2" fill="#D7CCC8"/>
        </svg>
    );

    const currentData = mode === 'projects' ? projects : blogs;

    return (
        <div className="clash-card__container">
            <div className="clash-card">
                {/* Header */}
                <div className="clash-card__header">
                    <div className="clash-card__header-top">
                        <h1 className="clash-card__title">
                            Portfolio Knight
                        </h1>
                        <button className="clash-card__close-btn">
                            ×
                        </button>
                    </div>

                    {/* Mode Toggle */}
                    <div className="clash-card__toggle-container">
                        <button
                            onClick={() => setMode('projects')}
                            className={`clash-card__toggle-btn ${mode === 'projects' ? 'clash-card__toggle-btn--active' : ''}`}
                        >
                            Projects Mode
                        </button>
                        <button
                            onClick={() => setMode('blogs')}
                            className={`clash-card__toggle-btn ${mode === 'blogs' ? 'clash-card__toggle-btn--active' : ''}`}
                        >
                            Blogs Mode
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="clash-card__content">
                    <div className="clash-card__main">
                        {/* Left: Card Image */}
                        <div className="clash-card__image-section">
                            <div className="clash-card__image-container">
                                <div className="clash-card__image">
                                    <div className="clash-card__emoji">🤴</div>
                                </div>
                                <div className="clash-card__elixir">
                                    <span className="clash-card__elixir-icon">🏠</span>
                                    <span className="clash-card__elixir-count">345/800</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="clash-card__info">
                            <div className="clash-card__rarity-section">
                                <div className="clash-card__rarity-row">
                                    <div className="clash-card__rarity-item">
                                        <div className="clash-card__rarity-label">Rarity:</div>
                                        <div className="clash-card__rarity-value">COMMON</div>
                                    </div>
                                    <div className="clash-card__rarity-item">
                                        <div className="clash-card__rarity-label">Type:</div>
                                        <div className="clash-card__rarity-value">TROOP</div>
                                    </div>
                                </div>
                            </div>

                            <div className="clash-card__description">
                                <p className="clash-card__description-text">
                                    <strong>A tough melee fighter.</strong> The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="clash-card__stats-grid">
                        {currentData.map((item, index) => {
                            const IconComponent = [DamageIcon, DPSIcon, HPIcon, HitSpeedIcon, TargetIcon, SpeedIcon][index % 6];
                            const colorClasses = [
                                'clash-card__stat-item--red',
                                'clash-card__stat-item--orange',
                                'clash-card__stat-item--pink',
                                'clash-card__stat-item--teal',
                                'clash-card__stat-item--gray',
                                'clash-card__stat-item--amber'
                            ][index % 6];

                            return (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`clash-card__stat-item ${colorClasses}`}
                                >
                                    <div className="clash-card__stat-icon">
                                        <IconComponent />
                                    </div>
                                    <div className="clash-card__stat-content">
                                        {mode === 'projects' ? (
                                            <>
                                                <div className="clash-card__stat-name">{item.name}</div>
                                                <div className="clash-card__stat-desc">{item.description}</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="clash-card__stat-name">{item.title}</div>
                                                <div className="clash-card__stat-date">{item.date.toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClashCard;
