import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import projectData from '../projectData';

const Projects = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>My Projects</h1>
            </header>
            <section>
                <p>Here are some of the projects I've worked on.</p>
                <ul className="blog-list">
                    {projectData.map((project, index) => (
                        <li key={index}>
                            <Link to={`/projects/${project.path}`}>{project.name}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Projects;
