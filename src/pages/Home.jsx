import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
     return (
          <>
               <section className="hero">
                    <h2>Welcome to SIT Trichy</h2>
                    <p>Seshasayee Institute of Technology is dedicated to excellence in education, innovation, and research for a brighter future.</p>
                    <Link to="/about" className="btn btn-warning fw-bold px-4 py-2 shadow">Explore More</Link>
               </section>

               <main className="container">
                    <section className="my-5">
                         <h2 className="text-center text-primary mb-4">About Us</h2>
                         <div className="about-box">
                              <p>Seshasayee Institute of Technology, Tiruchirappalli, a pioneering Technical Institution occupying a unique position in the field of technical education in our country, is the outcome of the brilliant vision, farsightedness and philanthropy of our illustrious founder Thiru. V. Seshasayee who was a veteran industrialist and architect of various industrial ventures.</p>
                              <p>It made a humble beginning by conducting A.M.I.E classes. Many Arts and Science Graduates availed this opportunity to become engineers.</p>
                         </div>
                    </section>

                    <section>
                         <h2 className="text-center text-primary mb-4">Our Departments</h2>
                         <div className="cards">
                              <div className="card-custom"><h3>CSE</h3><p>AI, ML, Software Development, Data Science & Cloud Computing.</p></div>
                              <div className="card-custom"><h3>ICE</h3><p>Electronics, Communication Systems, VLSI & Embedded Design.</p></div>
                              <div className="card-custom"><h3>Mechanical</h3><p>Robotics, Automotive Engineering, and Smart Manufacturing.</p></div>
                              <div className="card-custom"><h3>Civil</h3><p>Construction, Smart Cities, Structural & Environmental Engineering.</p></div>
                              <div className="card-custom"><h3>EEE</h3><p>Electrical Systems, Renewable Energy, Power Electronics.</p></div>
                              <div className="card-custom"><h3>Paper Technology</h3><p>Pulp & Paper Manufacturing, Green Technology, Industrial Applications.</p></div>
                              <div className="card-custom"><h3>Chemical Engineering</h3><p>Process Design, Petrochemicals, Pharmaceuticals & Biochemical Engineering.</p></div>
                         </div>
                    </section>

                    <section className="my-5">
                         <h2 className="text-center text-primary mb-4">Why Us?</h2>
                         <div className="cards">
                              <div className="card-custom"><img src="img/vecteezy_73th-years-anniversary-logo-with-golden-ring-isolated-on_17489884-1.jpg" alt="Experience" /><h3>73 Years of Experience</h3></div>
                              <div className="card-custom"><img src="img/scor.jpg" alt="Scholarships" /><h3>Scholarships</h3></div>
                              <div className="card-custom"><img src="img/sport.png" alt="Sports" /><h3>Sports</h3></div>
                              <div className="card-custom"><img src="img/discipline.png" alt="Discipline" /><h3>Discipline</h3></div>
                              <div className="card-custom"><img src="img/EXPORT.png" alt="Faculty" /><h3>Highly Qualified Faculties</h3></div>
                              <div className="card-custom"><img src="img/plasment.png" alt="Placement" /><h3>Best Placement Record</h3></div>
                         </div>
                    </section>

                    <section className="contact-section">
                         <h2>Find Us</h2>
                         <div className="contact-card">
                              <div className="address">
                                   <h3>Address</h3>
                                   <p>Thanjore Main Road,<br />Ariyamangalam, Kamaraj Nagar,<br />Trichy-620010,<br />Tamilnadu, India</p>
                              </div>
                              <div className="map-container">
                                   <iframe src="https://www.google.com/maps?q=Seshasayee+Institute+of+Technology+Trichy&hl=en&z=16&output=embed" allowFullScreen="" loading="lazy" title="Google Map"></iframe>
                              </div>
                         </div>
                    </section>
               </main>
          </>
     );
};

export default Home;     