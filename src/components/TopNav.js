// src/components/TopNav.js
import React from 'react';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className="topnav">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">Search</button>
            <div className="icons">
                <span>?</span>
                <span>👤</span>
                <span>🌐</span>
                <button className="language-button">English</button>
            </div>
        </div>
    );
};

export default TopNav;
