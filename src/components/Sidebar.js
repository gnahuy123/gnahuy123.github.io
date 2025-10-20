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
                <NavLink to="/blog/prepare-for-cs" activeClassName="active">How to Prepare for CS</NavLink>
                <NavLink to="/blog/y1s1-mod-review" activeClassName="active">Y1S1 Module Review</NavLink>
                <NavLink to="/blog/y1s2-mod-review" activeClassName="active">Y1S2 Module Review</NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
