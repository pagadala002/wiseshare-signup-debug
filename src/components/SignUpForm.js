import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import './SignUpForm.css'; // Ensure the CSS file path is correct

function SignUpPage() {
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
          <Link to="/signup" className="icon">👤</Link>
          <span className="icon">🌐 English ▼</span>
        </div>
      </header>

      {/* Layout with Sidebar and Main Content */}
      <div className="container">
        <Sidebar />
        <main className="signup-background"> {/* Apply background class here */}
          <div className="signup-container">
            <h2>Sign up</h2>
            <p>
              In order to view the property details and financial breakdowns of
              investment opportunities, you have to have an account with us.
            </p>
            <form>
              <label>
                First Name (legal name) <span className="required">*</span>
                <input type="text" placeholder="First Name" required />
              </label>
              <label>
                Last Name (legal name) <span className="required">*</span>
                <input type="text" placeholder="Last Name" required />
              </label>
              <label>
                Mobile Phone (optional)
                <input type="tel" placeholder="+1 201-555-0123" />
              </label>
              <label>
                Email <span className="required">*</span>
                <input type="email" placeholder="Email" required />
              </label>
              <label>
                Password <span className="required">*</span>
                <input type="password" placeholder="Password" required />
              </label>
              <button type="submit" className="signup-button">
                Sign up
              </button>
              <p>
                Already have an account? <Link to="/login">Log in now.</Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUpPage;
