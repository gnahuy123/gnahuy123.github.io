import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';
import ResourceDisplay from './ResourceDisplay';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </Link>

                {/* Use the abstract component */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ResourceDisplay />
                    <MuteButton />
                </div>

                <div className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Blog
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Projects
                    </NavLink>
                    <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Experience
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Contact Me
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

const MuteButton = () => {
    const { isMuted, toggleMute } = useAppContext();
    return (
        <button
            onClick={toggleMute}
            className="mute-button"
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
                padding: '0 0.5rem',
                color: 'white'
            }}
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
        >
            {isMuted ? "🔇" : "🔊"}
        </button>
    );
}

export default Navbar;