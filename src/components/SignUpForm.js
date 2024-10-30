// src/components/SignUpForm.js
import React from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    return (
        <div className="signup-container">
            <h2>Sign up</h2>
            <p>In order to view the property details and financial breakdowns of investment opportunities, you have to have an account with us.</p>
            <form>
                <label>First Name (legal name)</label>
                <input type="text" placeholder="First Name" required />

                <label>Last Name (legal name)</label>
                <input type="text" placeholder="Last Name" required />

                <label>Mobile Phone</label>
                <input type="tel" placeholder="+1 201-555-0123" required />

                <label>Email</label>
                <input type="email" placeholder="Email" required />

                <label>Password</label>
                <input type="password" placeholder="Password" required />

                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? <a href="/login">Log in now.</a></p>
        </div>
    );
};

export default SignUpForm;
