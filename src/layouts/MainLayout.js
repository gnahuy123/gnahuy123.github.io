import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackToHome from '../components/BackToHome';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <main className="content">
                    <Outlet />
                    <BackToHome />
                </main>
            </div>
        </>
    );
};

export default MainLayout;