import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import personData from '../data/personData';
import experienceData from '../data/experienceData';
import moduleData from '../data/moduleData';
import blogData from '../data/blogData';
import profilePic from '../assets/images/profilepic.png';

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
                        <div className="item-date">{formatDate(exp.start_time)} - {formatDate(exp.end_time)}</div>
                        <h3>{exp.role}</h3>
                        <p className="item-subtitle">{exp.company}</p>
                        <p>{exp.description}</p>
                        {exp.link && <Link to={exp.link} className="item-link">Read more -&gt;</Link>}
                    </div>
                ))}
            </div>
            <Link to="/experience" className="section-link">View full experience -&gt;</Link>
        </section>
    );
};

const ModulesSection = () => {
    const y1s1 = moduleData.filter(m => m.semester === 'Y1S1');
    const y1s2 = moduleData.filter(m => m.semester === 'Y1S2');
    const y2s1 = moduleData.filter(m => m.semester === 'Y2S1');
    const y2s2 = moduleData.filter(m => m.semester === 'Y2S2');
    const renderModuleGroup = (title, modules) => (
        <div className="module-group">
            <h4>{title}</h4>
            {modules.map((mod, i) => (
                <Link key={i} to={`/modules/${mod.code}`} className="item-card clickable compact">
                    <span className="module-code">{mod.code}</span>
                    <span className="module-name">{mod.name}</span>
                    <span className="module-grade">{mod.grade}</span>
                </Link>
            ))}
        </div>
    );

    return (
        <section id="modules" className="scroll-section">
            <h2>Module Reviews</h2>
            <div className="section-content">
                {renderModuleGroup('Year 2 Semester 2', y2s2)}
                {renderModuleGroup('Year 2 Semester 1', y2s1)}
                {renderModuleGroup('Year 1 Semester 2', y1s2)}
                {renderModuleGroup('Year 1 Semester 1', y1s1)}
            </div>
            <Link to="/modules" className="section-link">View all modules -&gt;</Link>
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
            <Link to="/blog" className="section-link">View all posts -&gt;</Link>
        </section>
    );
};

const Home = () => {
    return (
        <div className="home-scroll">
            {/* Hero Section */}
            <section className="hero-section">
                <img src={profilePic} alt={personData.name} className="profile-pic" />
                <h1>Hey, I'm {personData.name}</h1>
                <p>{personData.description}</p>
                <p className="scroll-hint">Scroll down to explore</p>
            </section>

            {/* Dynamically loaded sections */}
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <ExperienceSection />
            </Suspense>

            <Suspense fallback={<div className="loading">Loading...</div>}>
                <ModulesSection />
            </Suspense>

            <Suspense fallback={<div className="loading">Loading...</div>}>
                <BlogSection />
            </Suspense>

            {/* Fun Zone CTA */}
            <section className="funzone-cta">
                <Link to="/funzone">Visit the Fun Zone -&gt;</Link>
            </section>
        </div>
    );
};

export default Home;
