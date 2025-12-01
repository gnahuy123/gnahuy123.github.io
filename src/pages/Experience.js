import React from 'react';
import './Page.css';
import experienceData from '../data/experienceData';

const Experience = () => {
    // Helper to format dates (e.g., "August 2025")
    const formatDate = (date) => {
        if (!date) return 'Present';
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    };

    return (
        <div className="page">
            <header className="page-header">
                <h1>My Experience</h1>
            </header>

            <section>
                <p>My professional journey, internships, and teaching roles.</p>

                <div className="experience-list">
                    {experienceData.map((exp, index) => (
                        <div key={index} style={{
                            marginBottom: '2rem',
                            padding: '1.5rem',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            border: '2px solid #1a2a44'
                        }}>
                            <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{exp.role}</h2>
                            <h3 style={{ color: '#8ba3c7', marginTop: 0 }}>{exp.company}</h3>
                            <p style={{ color: '#ffd700', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {formatDate(exp.start_time)} - {formatDate(exp.end_time)}
                            </p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Experience;