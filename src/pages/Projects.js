import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import projectData from '../data/projectData';

const Projects = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>My Projects</h1>
            </header>
            <section>
                <p>Here are some of the projects I've worked on.</p>
                {projectData.length > 0 ? (() => {
                    const sortedProjects = [...projectData].sort((a, b) => new Date(b.date) - new Date(a.date));
                    const featured = sortedProjects[0];
                    const others = sortedProjects.slice(1);

                    return (
                        <>
                            <div className="featured-post">
                                <h3>✨ Featured Project</h3>
                                <Link to={`/projects/${featured.path}`} className="featured-link">
                                    {featured.name}
                                    <span className="post-date">{featured.date.toLocaleDateString()}</span>
                                </Link>
                                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    {featured.description}
                                </p>
                            </div>

                            {others.length > 0 && <h3 className="recent-header">Other Projects</h3>}
                            <ul className="blog-list">
                                {others.map((project, index) => (
                                    <li key={index}>
                                        <Link to={`/projects/${project.path}`}>
                                            {project.name}
                                            <span style={{ fontSize: '0.8rem', marginLeft: '10px', opacity: 0.7 }}>
                                                {project.date.toLocaleDateString()}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    );
                })() : (
                    <p> This section is under construction! Please check back again</p>
                )}
            </section>
        </div>
    );
};

export default Projects;
