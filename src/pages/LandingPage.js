import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="main-container">
            <h1>LANDING PAGE</h1>
            <Link to="/home.js">
                <button type="button" className="btn btn-warning">Click me!</button>
            </Link>
            

        </div>
    )
}

export default LandingPage;
