import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ title, items, basePath }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>{title}</h2>
            </div>
            <nav className="sidebar-nav">
                {items.map((item, index) => (
                    <NavLink key={index} to={`${basePath}/${item.path}`} activeClassName="active">
                        {item.title || item.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
