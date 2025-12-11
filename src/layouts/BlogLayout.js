import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import blogData from '../data/blogData';
import PostNavigation from '../components/PostNavigation';

const BlogLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container with-sidebar">
                <Sidebar title="Blog" items={blogData} basePath="/blog" />
                <main className="content">
                    <Outlet />
                    <PostNavigation />
                </main>
            </div>
        </>
    );
};

export default BlogLayout;;