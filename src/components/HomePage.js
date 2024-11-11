import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  // State for the current message index
  const [currentMessage, setCurrentMessage] = useState(0);

  // Array of benefits messages for the footer
  const benefitsMessages = [
    "WiseShare helps you build wealth through fractional real estate investments.",
    "Join WiseShare to invest in rental properties with minimal effort.",
    "Get started with WiseShare and unlock the benefits of real estate investing.",
    "WiseShare signed up 12,000 people to invest in 150 rental homes last year.",
    "More than 100,000 others are looking forward to investing through WiseShare."
  ];

  // useEffect to cycle through messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % benefitsMessages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            WiseShare <span className="home-icon">🏠</span>
          </Link>
        </div>
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search" />
          <button className="search-button">Search</button>
        </div>
        <div className="icons">
          <span className="icon">?</span>
          <Link to="/signup" className="icon">
            👤
          </Link>
          <span className="icon">🌐 English ▼</span>
        </div>
      </header>

      {/* Layout with Sidebar and Main Content */}
      <div className="container">
        <Sidebar />
        <main className="content">
          {/* Centered Title and Subtitle */}
          <div className="center-header">
            <h2 className="title">Easily invest in real estate</h2>
            <p className="subtitle">
              Maximize your wealth — unlock the benefits of real estate investing with rental income
            </p>
          </div>

          {/* Property Grid */}
          <div className="property-grid">
            {/* Property Cards */}
            <div className="property-card">
              <img src="/images/image1.jpg" alt="Luxury Villa in Erie" />
              <div className="property-info">
                <h3>Luxury Villa in Erie</h3>
                <p>5 Beds, 1 Bath · $807,804.58</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image2.avif" alt="Modern Apartment in Philadelphia" />
              <div className="property-info">
                <h3>Modern Apartment in Philadelphia</h3>
                <p>3 Beds, 2 Baths · $751,171.31</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image3.jpg" alt="Beach House in Harrisburg" />
              <div className="property-info">
                <h3>Beach House in Harrisburg</h3>
                <p>2 Beds, 1 Bath · $391,899.17</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image4.avif" alt="Suburban Home in Chester" />
              <div className="property-info">
                <h3>Suburban Home in Chester</h3>
                <p>6 Beds, 1 Bath · $924,923.46</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image5.avif" alt="Penthouse in Cleveland" />
              <div className="property-info">
                <h3>Penthouse in Cleveland</h3>
                <p>4 Beds, 3 Baths · $1,200,000.00</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image6.avif" alt="Mountain Cabin in Scranton" />
              <div className="property-info">
                <h3>Mountain Cabin in Scranton</h3>
                <p>2 Beds, 1 Bath · $400,000.00</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image7.avif" alt="Countryside House in Allentown" />
              <div className="property-info">
                <h3>Countryside House in Allentown</h3>
                <p>3 Beds, 2 Baths · $600,000.00</p>
              </div>
            </div>
            <div className="property-card">
              <img src="/images/image8.avif" alt="Lakefront Villa in Springfield" />
              <div className="property-info">
                <h3>Lakefront Villa in Springfield</h3>
                <p>5 Beds, 4 Baths · $950,000.00</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
