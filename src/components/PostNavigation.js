import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import blogData from '../data/blogData';
import projectData from '../data/projectData';
import './PostNavigation.css';

const PostNavigation = () => {
    const location = useLocation();
    const isBlog = location.pathname.includes('/blog/');
    const isProject = location.pathname.includes('/projects/');

    if (!isBlog && !isProject) return null;

    const data = isBlog ? blogData : projectData;
    const basePath = isBlog ? '/blog' : '/projects';

    // Sort data by date just like the list page, to make navigation consistent
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Find current index
    const currentPath = location.pathname.replace(basePath + '/', '');
    const currentIndex = sortedData.findIndex(item => item.path === currentPath);

    if (currentIndex === -1) return null;

    const nextPost = currentIndex > 0 ? sortedData[currentIndex - 1] : null; // Newer post (higher in list)
    const prevPost = currentIndex < sortedData.length - 1 ? sortedData[currentIndex + 1] : null; // Older post (lower in list)

    const getRandomPost = () => {
        const available = sortedData.filter((_, idx) => idx !== currentIndex);
        if (available.length === 0) return null;
        return available[Math.floor(Math.random() * available.length)];
    };

    const randomPost = getRandomPost();

    return (
        <div className="post-navigation">
            <h3>Explore More</h3>
            <div className="nav-links">
                {nextPost ? (
                    <Link to={`${basePath}/${nextPost.path}`} className="nav-btn prev">
                        <span className="label">Next (Newer)</span>
                        <span className="title">{nextPost.title}</span>
                    </Link>
                ) : (
                    <div className="nav-placeholder" />
                )}

                {randomPost && (
                    <Link to={`${basePath}/${randomPost.path}`} className="nav-btn random">
                        <span className="label">🎲 Surprise Me</span>
                        <span className="title">Random Post</span>
                    </Link>
                )}

                {prevPost ? (
                    <Link to={`${basePath}/${prevPost.path}`} className="nav-btn next">
                        <span className="label">Previous (Older)</span>
                        <span className="title">{prevPost.title}</span>
                    </Link>
                ) : (
                    <div className="nav-placeholder" />
                )}
            </div>
        </div>
    );
};

export default PostNavigation;
