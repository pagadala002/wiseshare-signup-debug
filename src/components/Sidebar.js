// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="logo">WiseShare</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Music</li>
                    <li>Gaming</li>
                    <li>Education</li>
                    <li>Science & Tech</li>
                    <li>Entertainment</li>
                    <li>Student Hubs</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
