import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import projectData from '../data/projectData';
import BackToHome from '../components/BackToHome';

const ProjectsLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container with-sidebar">
                <Sidebar title="Projects" items={projectData} basePath="/projects" />
                <main className="content">
                    <Outlet />
                    <BackToHome />
                </main>
            </div>
        </>
    );
};

export default ProjectsLayout;