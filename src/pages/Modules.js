import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import moduleData from '../data/moduleData';

const Modules = () => {
    // Group by semester
    const y1s1 = moduleData.filter(m => m.semester === 'Y1S1');
    const y1s2 = moduleData.filter(m => m.semester === 'Y1S2');
    const y2s1 = moduleData.filter(m => m.semester === 'Y2S1');

    return (
        <div className="page">
            <header className="page-header">
                <h1>Module Reviews</h1>
            </header>

            <section>
                <p>My reviews and experiences from NUS Computer Science modules.</p>

                <h3>Year 2 Semester 1</h3>
                <ul className="blog-list">
                    {y2s1.map((mod) => (
                        <li key={mod.code}>
                            <Link to={`/modules/${mod.code}`}>
                                <strong>{mod.code}</strong> — {mod.name}
                                <span style={{ float: 'right', color: 'var(--text-muted)' }}>{mod.grade}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <h3>Year 1 Semester 2</h3>
                <ul className="blog-list">
                    {y1s2.map((mod) => (
                        <li key={mod.code}>
                            <Link to={`/modules/${mod.code}`}>
                                <strong>{mod.code}</strong> — {mod.name}
                                <span style={{ float: 'right', color: 'var(--text-muted)' }}>{mod.grade}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <h3>Year 1 Semester 1</h3>
                <ul className="blog-list">
                    {y1s1.map((mod) => (
                        <li key={mod.code}>
                            <Link to={`/modules/${mod.code}`}>
                                <strong>{mod.code}</strong> — {mod.name}
                                <span style={{ float: 'right', color: 'var(--text-muted)' }}>{mod.grade}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Modules;

