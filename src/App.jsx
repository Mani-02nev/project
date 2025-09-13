import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';

// Import all images
import sitLogo from './assets/img/sit.jpeg';
import founderLogo from './assets/img/FOUNDER.jpeg';
import experienceImg from './assets/img/vecteezy_73th-years-anniversary-logo-with-golden-ring-isolated-on_17489884-1.jpg';
import scholarshipsImg from './assets/img/scor.jpg';
import sportsImg from './assets/img/sport.png';
import disciplineImg from './assets/img/discipline.png';
import facultyImg from './assets/img/EXPORT.png';
import placementImg from './assets/img/plasment.png';
import hodImg from './assets/img/cshod.jpg';

// Reusable Components
const Header = () => (
  <>
    <header className="header">
      <span><img className="img-logo" src={sitLogo} alt="SIT Logo" /></span>
      <span className="header-title">SESHASAYEE INSTITUTE OF TECHNOLOGY, Trichy</span>
      <span><img className="img-logo" src={founderLogo} alt="Founder" /></span>
    </header>
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-dark" to="/">SIT College</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/departments">Departments</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/admission">Admission</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 SIT Trichy. All Rights Reserved.</p>
  </footer>
);

// Page Components
const Home = () => (
  <>
    <section className="hero">
      <h2>Welcome to SIT Trichy</h2>
      <p>Excellence in education, innovation, and research.</p>
      <Link to="/about" className="btn btn-warning fw-bold px-4 py-2 shadow">Explore More</Link>
    </section>
    <main className="container">
      <section className="my-5">
        <h2 className="text-center text-primary mb-4">Why Us?</h2>
        <div className="cards">
          <div className="card-custom"><img src={experienceImg} alt="Experience" /><h3>73 Years of Experience</h3></div>
          <div className="card-custom"><img src={scholarshipsImg} alt="Scholarships" /><h3>Scholarships</h3></div>
          <div className="card-custom"><img src={sportsImg} alt="Sports" /><h3>Sports</h3></div>
          <div className="card-custom"><img src={disciplineImg} alt="Discipline" /><h3>Discipline</h3></div>
          <div className="card-custom"><img src={facultyImg} alt="Faculty" /><h3>Highly Qualified Faculties</h3></div>
          <div className="card-custom"><img src={placementImg} alt="Placement" /><h3>Best Placement Record</h3></div>
        </div>
      </section>
    </main>
  </>
);

const About = () => (
  <section className="about-page-section">
    <div className="card about-card">
      <h2>History of SIT</h2>
      <div className="scroll-box">
        <p>Thiru V. Seshasayee was born in the year 1890... [History text continues]</p>
      </div>
    </div>
    <div className="card about-card">
      <h2>Our Mission</h2>
      <p>To provide high-quality technical education, encourage research and innovation...</p>
    </div>
  </section>
);

const Departments = () => (
  <div className="main-container">
    <nav className="left-sidebar">
      <h4>Department Sections</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link">About Department</a></li>
        <li className="nav-item"><a className="nav-link">Vision & Mission</a></li>
        <li className="nav-item"><a className="nav-link">Faculty Profile</a></li>
      </ul>
    </nav>
    <main className="main-content">
      <section className="content-section">
        <h2>About the Department</h2>
        <p>The Department of Computer Engineering, established in 1990, is dedicated to quality education.</p>
      </section>
      <section className="content-section">
        <h2>Faculty Profile</h2>
        <div className="hod-card">
          <img src={hodImg} alt="HOD" />
          <div>
            <h3>Thiru.T.MUTHAMIL SELVAM, M.Tech.</h3>
            <p><b>Head of the Department (i/c)</b></p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

const Admission = () => (
  <main className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="form-card">
          <h2 className="text-center mb-4 text-primary">Admission Form</h2>
          <form>{/* Form inputs go here */}</form>
        </div>
      </div>
    </div>
  </main>
);

const Contact = () => (
  <div className="container my-5">
    <h2 className="text-center">Contact Us</h2>
    <div className="row g-4">
      <div className="col-lg-5">
        <div className="contact-info">
          <h4>Get in Touch</h4>
          <p><b>Address:</b> SIT College, Trichy, Tamil Nadu, India</p>
          <p><b>Phone:</b> +91 98765 43210</p>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="contact-form">
          <h4>Send us a Message</h4>
          <form>{/* Form inputs go here */}</form>
        </div>
      </div>
    </div>
  </div>
);

// Main App component that renders everything
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;