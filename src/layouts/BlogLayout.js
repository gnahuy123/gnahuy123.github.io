import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const BlogLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <Sidebar />
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default BlogLayout;
