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
                <ul className="blog-list">
                    {blogData.map((post, index) => (
                        <li key={index}>
                            <Link to={`/blog/${post.path}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Blog;
