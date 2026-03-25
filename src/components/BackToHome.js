import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BackToHome.css';

const BackToHome = () => {
    const location = useLocation();

    // Don't show the back button on the home page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="back-to-home-container">
            <Link to="/" className="back-to-home-btn">
                ← Back to Home
            </Link>
        </div>
    );
};

export default BackToHome;
