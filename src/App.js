// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <TopNav />
                <div
                    className="background-section"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + '/interior.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '20px',
                        minHeight: '100vh',
                    }}
                >
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}

export default App;
