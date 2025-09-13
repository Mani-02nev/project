import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (
          <>
               <header className="header">
                    <span><img className="img-logo" src="img/sit.jpeg" alt="SIT Logo" /></span>
                    <span className="header-title">SESHASAYEE INSTITUTE OF TECHNOLOGY, Trichy</span>
                    <span><img className="img-logo" src="img/FOUNDER.jpeg" alt="Founder" /></span>
               </header>
               <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container-fluid">
                         <NavLink className="navbar-brand fw-bold text-dark" to="/">SIT College</NavLink>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                              <ul className="navbar-nav gap-3">
                                   <li className="nav-item">
                                        <NavLink className="nav-link text-dark fw-semibold" to="/" end>Home</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link text-dark fw-semibold" to="/departments">Departments</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link text-dark fw-semibold" to="/admission">Admission</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link text-dark fw-semibold" to="/about">About</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link text-dark fw-semibold" to="/contact">Contact</NavLink>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Header;