import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import moduleData from '../data/moduleData';

const ModulesLayout = () => {
    // Transform moduleData for Sidebar (needs title and path)
    const sidebarItems = moduleData.map(mod => ({
        title: mod.code,
        path: mod.code,
    }));

    return (
        <>
            <Navbar />
            <div className="app-container with-sidebar">
                <Sidebar title="Modules" items={sidebarItems} basePath="/modules" />
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default ModulesLayout;
