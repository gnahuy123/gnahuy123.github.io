import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import projectData from '../data/projectData';

const Projects = () => {
    const sortedProjects = [...projectData].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="page">
            <header className="page-header">
                <h1>Projects</h1>
            </header>
            <section>
                <p>Things I've built.</p>

                {sortedProjects.length > 0 ? (
                    <ul className="blog-list">
                        {sortedProjects.map((project, index) => (
                            <li key={index}>
                                <Link to={`/projects/${project.path}`}>
                                    <strong>{project.name}</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}>
                                        {project.description}
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                        {project.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No projects yet. Check back soon!</p>
                )}
            </section>
        </div>
    );
};

export default Projects;
