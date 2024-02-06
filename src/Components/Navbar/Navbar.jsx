import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navbarCss from './navbar.module.css'

export default class Navbar extends Component {
  render() {
    return <>
    <nav className={ navbarCss.bg +" navbar navbar-expand-lg"}>
    <div className="container">
    <Link className="navbar-brand fs-1 fw-bold text-white" to="/home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item fs-6 fw-bolder me-5">
          <Link className="nav-link text-white" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item fs-6 fw-bolder me-5">
          <Link className="nav-link text-white" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item fs-6 fw-bolder me-5">
          <Link className="nav-link text-white" to="contact">CONTACT</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  }
}
