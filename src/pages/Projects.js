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
                    <div className="project-list">
                        {sortedProjects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-card-top">
                                    <Link to={`/projects/${project.path}`} className="project-card-name">
                                        {project.name}
                                    </Link>
                                    <span className="project-card-date">
                                        {project.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    </span>
                                </div>

                                <p className="project-card-desc">{project.description}</p>

                                {project.techStack && (
                                    <div className="tech-stack">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                )}

                                <div className="project-card-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    )}
                                    {project.url && (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    )}
                                    <Link to={`/projects/${project.path}`}>Details →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No projects yet. Check back soon!</p>
                )}
            </section>
        </div>
    );
};

export default Projects;
