import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // For styling
import resume from '../assets/files/Yu_Hang_Resume.pdf'; // Make sure to move the resume to this path

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Navigation</h2>
            </div>
            <nav className="sidebar-nav">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/prepare-for-cs" activeClassName="active">How to Prepare for CS</NavLink>
                <NavLink to="/y1s1-mod-review" activeClassName="active">Y1S1 Module Review</NavLink>
                <NavLink to="/y1s2-mod-review" activeClassName="active">Y1S2 Module Review</NavLink>
            </nav>
            <div className="sidebar-footer">
                <h3>Contact Me</h3>
                <p><a href="mailto:tanyuhang2000@gmail.com">tanyuhang2000@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/tan-yu-hang-350189363/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://github.com/gnahuy123" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <a href={resume} download="Tan_Yu_Hang_Resume.pdf" className="download-button">
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
