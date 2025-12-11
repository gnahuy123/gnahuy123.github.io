import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ title, items, basePath }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
        // Dispatch event to resizing App container content if needed, 
        // or let CSS handle it via class
        document.body.classList.toggle('sidebar-collapsed', !isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isCollapsed ? '☰' : '✕'} {/* Simple icon toggle */}
            </button>

            <div className="sidebar-header">
                {!isCollapsed && <h2>{title}</h2>}
            </div>

            <nav className="sidebar-nav">
                {items.map((item, index) => (
                    <NavLink
                        key={index}
                        to={`${basePath}/${item.path}`}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? 'active' : ''}`
                        }
                        title={item.title || item.name} // Tooltip when collapsed?
                    >
                        {/* If we want icons later, we can add them here. For now text. */}
                        <span className="link-text">
                            {/* Show first letter if collapsed? Or just hide text? 
                                User asked for "Collapsible", implying the whole thing collapses. 
                                Let's hide text when collapsed. */}
                            {isCollapsed ? (item.title || item.name).charAt(0) : (item.title || item.name)}
                        </span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
