import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';
import ResourceDisplay from './ResourceDisplay';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </Link>

                {/* Use the abstract component */}
                <ResourceDisplay />

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

export default Navbar;