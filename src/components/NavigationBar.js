import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navigationbar() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      
      <a className="navbar-brand" href="/"><img height="105px" width="315px" src="codigo-logo.jpg" alt="brand logo"></img></a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#breakdown">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="breakdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home.js">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services.js">
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about.js">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navigationbar;

