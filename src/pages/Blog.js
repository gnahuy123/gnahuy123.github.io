import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import blogData from '../data/blogData';

const Blog = () => {
    const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="page">
            <header className="page-header">
                <h1>Blog Posts</h1>
            </header>
            <section>
                <p>Tips and guides for CS students at NUS.</p>

                <ul className="blog-list">
                    {sortedPosts.map((post, index) => (
                        <li key={index}>
                            <Link to={`/blog/${post.path}`}>
                                {post.title}
                                <span style={{ fontSize: '0.85rem', marginLeft: '10px', color: 'var(--text-muted)' }}>
                                    {post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {sortedPosts.length === 0 && (
                    <p>No posts yet. Check back soon!</p>
                )}
            </section>
        </div>
    );
};

export default Blog;
