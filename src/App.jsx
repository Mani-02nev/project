import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <span>
          <img className="img-logo" src="/img/sit.jpeg" alt="SIT Logo" />
        </span>
        <span className="header-title">
          SESHASAYEE INSTITUTE OF TECHNOLOGY ,Trichy
        </span>
        <span>
          <img className="img-logo" src="/img/FOUNDER.jpeg" alt="Founder" />
        </span>
      </header>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-dark" href="#">
            SIT College
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link active text-dark fw-semibold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="dept.html">
                  Departments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="admission.html">
                  Admission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to SIT Trichy</h2>
        <p>
          Seshasayee Institute of Technology is dedicated to excellence in
          education, innovation, and research for a brighter future.
        </p>
        <a href="#" className="btn btn-warning fw-bold px-4 py-2 shadow">
          Explore More
        </a>
      </section>

      {/* Main Content */}
      <main className="container">
        {/* About */}
        <section className="my-5">
          <h2 className="text-center text-primary mb-4">About Us</h2>
          <div className="about-box">
            <p>
              Seshasayee Institute of Technology, Tiruchirappalli, a pioneering
              Technical Institution occupying a unique position in the field of
              technical education in our country, is the outcome of the brilliant
              vision, farsightedness and philanthropy of our illustrious founder
              Thiru. V. Seshasayee who was a veteran industrialist and architect
              of various industrial ventures.
            </p>
            <p>
              He realized the need for more engineers and technicians for rapid
              industrialization of our country and started this Technical
              Institution in the year 1952 with the purse presented to him by his
              friends and well-wishers on the occasion of his 61st birthday. This
              technical institution was formally declared open on 28th January
              1952.
            </p>
            <p>
              It made a humble beginning by conducting A.M.I.E classes. Many Arts
              and Science Graduates availed this opportunity to become engineers.
            </p>
          </div>
        </section>

        {/* Departments */}
        <section>
          <h2 className="text-center text-primary mb-4">Our Departments</h2>
          <div className="cards">
            <div className="card-custom">
              <h3>CSE</h3>
              <p>AI, ML, Software Development, Data Science & Cloud Computing.</p>
            </div>
            <div className="card-custom">
              <h3>ICE</h3>
              <p>Electronics, Communication Systems, VLSI & Embedded Design.</p>
            </div>
            <div className="card-custom">
              <h3>Mechanical</h3>
              <p>Robotics, Automotive Engineering, and Smart Manufacturing.</p>
            </div>
            <div className="card-custom">
              <h3>Civil</h3>
              <p>Construction, Smart Cities, Structural & Environmental Engineering.</p>
            </div>
            <div className="card-custom">
              <h3>EEE</h3>
              <p>Electrical Systems, Renewable Energy, Power Electronics.</p>
            </div>
            <div className="card-custom">
              <h3>Paper Technology</h3>
              <p>
                Pulp & Paper Manufacturing, Green Technology, Industrial
                Applications.
              </p>
            </div>
            <div className="card-custom">
              <h3>Chemical Engineering</h3>
              <p>
                Process Design, Petrochemicals, Pharmaceuticals & Biochemical
                Engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="my-5">
          <h2 className="text-center text-primary mb-4">Why Us?</h2>
          <div className="cards">
            <div className="card-custom">
              <img src="/img/vecteezy_73th-years-anniversary.jpg" alt="" />
              <h3>73 Years of Experience</h3>
            </div>
            <div className="card-custom">
              <img src="/img/scor.jpg" alt="" />
              <h3>Scholarships</h3>
            </div>
            <div className="card-custom">
              <img src="/img/sport.png" alt="" />
              <h3>Sports</h3>
            </div>
            <div className="card-custom">
              <img src="/img/discipline.png" alt="" />
              <h3>Discipline</h3>
            </div>
            <div className="card-custom">
              <img src="/img/EXPORT.png" alt="" />
              <h3>Highly Qualified Faculties</h3>
            </div>
            <div className="card-custom">
              <img src="/img/plasment.png" alt="" />
              <h3>Best Placement Record</h3>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact">
          <h2>Find Us</h2>
          <div className="contact-card">
            <div className="address">
              <h3>Address</h3>
              <p>
                Thanjore Main Road,<br />
                Ariyamangalam, Kamaraj Nagar,<br />
                Trichy-620010,<br />
                Tamilnadu, India
              </p>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Seshasayee+Institute+of+Technology+Trichy&hl=en&z=16&output=embed"
                allowFullScreen
                loading="lazy"
                title="SIT Map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 SIT Trichy | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
