import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default MainLayout;