import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import personData from '../data/personData';
import experienceData from '../data/experienceData';
import projectData from '../data/projectData';
import moduleData from '../data/moduleData';
import blogData from '../data/blogData';

// Section components
const ExperienceSection = () => {
    const formatDate = (date) => {
        if (!date) return 'Present';
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    const sortedExp = [...experienceData].sort((a, b) =>
        new Date(b.start_time) - new Date(a.start_time)
    );

    return (
        <section id="experience" className="scroll-section">
            <h2>Experience</h2>
            <div className="section-content">
                {sortedExp.map((exp, i) => (
                    <div key={i} className="item-card">
                        <div className="item-date">{formatDate(exp.start_time)} – {formatDate(exp.end_time)}</div>
                        <h3>{exp.role}</h3>
                        <p className="item-subtitle">{exp.company}</p>
                        <p>{exp.description}</p>
                        {exp.link && <Link to={exp.link} className="item-link">Read more →</Link>}
                    </div>
                ))}
            </div>
            <Link to="/experience" className="section-link">View full experience →</Link>
        </section>
    );
};

const ProjectsSection = () => {
    const sortedProjects = [...projectData].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );

    return (
        <section id="projects" className="scroll-section">
            <h2>Projects</h2>
            <div className="section-content">
                {sortedProjects.map((project, i) => (
                    <Link key={i} to={`/projects/${project.path}`} className="item-card clickable">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <span className="item-date">{project.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                    </Link>
                ))}
            </div>
            <Link to="/projects" className="section-link">View all projects →</Link>
        </section>
    );
};

const ModulesSection = () => {
    const y1s1 = moduleData.filter(m => m.semester === 'Y1S1');
    const y1s2 = moduleData.filter(m => m.semester === 'Y1S2');
    const y2s1 = moduleData.filter(m => m.semester === 'Y2S1');

    return (
        <section id="modules" className="scroll-section">
            <h2>Module Reviews</h2>
            <div className="section-content">
                <div className="module-group">
                    <h4>Year 1 Semester 1</h4>
                    {y1s1.map((mod, i) => (
                        <Link key={i} to={`/modules/${mod.code}`} className="item-card clickable compact">
                            <span className="module-code">{mod.code}</span>
                            <span className="module-name">{mod.name}</span>
                            <span className="module-grade">{mod.grade}</span>
                        </Link>
                    ))}
                </div>
                <div className="module-group">
                    <h4>Year 1 Semester 2</h4>
                    {y1s2.map((mod, i) => (
                        <Link key={i} to={`/modules/${mod.code}`} className="item-card clickable compact">
                            <span className="module-code">{mod.code}</span>
                            <span className="module-name">{mod.name}</span>
                            <span className="module-grade">{mod.grade}</span>
                        </Link>
                    ))}
                </div>
                <div className="module-group">
                    <h4>Year 2 Semester 1</h4>
                    {y2s1.map((mod, i) => (
                        <Link key={i} to={`/modules/${mod.code}`} className="item-card clickable compact">
                            <span className="module-code">{mod.code}</span>
                            <span className="module-name">{mod.name}</span>
                            <span className="module-grade">{mod.grade}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <Link to="/modules" className="section-link">View all modules →</Link>
        </section>
    );
};

const BlogSection = () => {
    const sortedPosts = [...blogData].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );

    return (
        <section id="blog" className="scroll-section">
            <h2>Blog</h2>
            <div className="section-content">
                {sortedPosts.map((post, i) => (
                    <Link key={i} to={`/blog/${post.path}`} className="item-card clickable">
                        <h3>{post.title}</h3>
                        <span className="item-date">{post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </Link>
                ))}
            </div>
            <Link to="/blog" className="section-link">View all posts →</Link>
        </section>
    );
};

const Home = () => {
    return (
        <div className="home-scroll">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Hey, I'm {personData.name}</h1>
                <p>{personData.description}</p>
                <p className="scroll-hint">Scroll down to explore ↓</p>
            </section>

            {/* Dynamically loaded sections */}
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <ExperienceSection />
            </Suspense>

            <Suspense fallback={<div className="loading">Loading...</div>}>
                <ProjectsSection />
            </Suspense>

            <Suspense fallback={<div className="loading">Loading...</div>}>
                <ModulesSection />
            </Suspense>

            <Suspense fallback={<div className="loading">Loading...</div>}>
                <BlogSection />
            </Suspense>

            {/* Fun Zone CTA */}
            <section className="funzone-cta">
                <Link to="/funzone">Visit the Fun Zone →</Link>
            </section>
        </div>
    );
};

export default Home;
