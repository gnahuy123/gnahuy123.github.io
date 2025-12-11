import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import blogData from '../data/blogData';

const Blog = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Blog Posts</h1>
            </header>
            <section>
                <p>Here you'll find all my blog posts about my journey at NUS, module reviews, and tips for CS students.</p>
                {/* Featured Post (Latest) */}
                {blogData.length > 0 && (() => {
                    const sortedPosts = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
                    const featured = sortedPosts[0];
                    const others = sortedPosts.slice(1);

                    return (
                        <>
                            <div className="featured-post">
                                <h3>✨ Featured Post</h3>
                                <Link to={`/blog/${featured.path}`} className="featured-link">
                                    {featured.title}
                                    <span className="post-date">{featured.date.toLocaleDateString()}</span>
                                </Link>
                            </div>

                            {others.length > 0 && <h3 className="recent-header">Recent Posts</h3>}
                            <ul className="blog-list">
                                {others.map((post, index) => (
                                    <li key={index}>
                                        <Link to={`/blog/${post.path}`}>
                                            {post.title}
                                            <span style={{ fontSize: '0.8rem', marginLeft: '10px', opacity: 0.7 }}>
                                                {post.date.toLocaleDateString()}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    );
                })()}
            </section>
        </div>
    );
};

export default Blog;
