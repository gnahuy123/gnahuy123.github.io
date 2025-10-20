import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const Blog = () => {
    const blogPosts = [
        { path: '/blog/prepare-for-cs', title: 'How to Prepare for CS in University' },
        { path: '/blog/y1s1-mod-review', title: 'Y1S1 Module Review' },
        { path: '/blog/y1s2-mod-review', title: 'Y1S2 Module Review' },
    ];

    return (
        <div className="page">
            <header className="page-header">
                <h1>Blog Posts</h1>
            </header>
            <section>
                <p>Here you'll find all my blog posts about my journey at NUS, module reviews, and tips for CS students.</p>
                <ul className="blog-list">
                    {blogPosts.map(post => (
                        <li key={post.path}>
                            <Link to={post.path}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Blog;
