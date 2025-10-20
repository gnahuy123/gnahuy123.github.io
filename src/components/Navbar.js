import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    Tan Yu Hang
                </NavLink>
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
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Contact Me
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
