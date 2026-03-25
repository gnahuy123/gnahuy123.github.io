import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import blogData from '../data/blogData';
import BackToHome from '../components/BackToHome';

const BlogLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container with-sidebar">
                <Sidebar title="Blog" items={blogData} basePath="/blog" />
                <main className="content">
                    <Outlet />
                    <BackToHome />
                </main>
            </div>
        </>
    );
};

export default BlogLayout;