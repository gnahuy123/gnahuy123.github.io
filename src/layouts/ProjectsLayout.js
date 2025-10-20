import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import projectData from '../projectData';

const ProjectsLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <Sidebar title="Projects" items={projectData} basePath="/projects" />
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default ProjectsLayout;
