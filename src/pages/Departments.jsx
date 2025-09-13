import React, { useState, useEffect } from 'react';
import './Departments.css';

const Departments = () => {
     const [activeSection, setActiveSection] = useState('about');

     useEffect(() => {
          // Show the initial section
          const section = document.getElementById(activeSection);
          if (section) {
               section.classList.add('show');
          }
     }, [activeSection]);

     const showSection = (id) => {
          document.querySelectorAll('.content-section').forEach(sec => {
               sec.classList.remove('show');
          });
          const section = document.getElementById(id);
          section.classList.add('show');
          setActiveSection(id);
     };

     return (
          <div className="main-container">
               <nav className="left-sidebar">
                    <div className="nav-header">Department Sections</div>
                    <ul className="nav flex-column">
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => showSection('about')}>About Department</a></li>
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'vision' ? 'active' : ''}`} onClick={() => showSection('vision')}>Vision & Mission</a></li>
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'faculty' ? 'active' : ''}`} onClick={() => showSection('faculty')}>Faculty Profile</a></li>
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'syllabus' ? 'active' : ''}`} onClick={() => showSection('syllabus')}>Syllabus</a></li>
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'placement' ? 'active' : ''}`} onClick={() => showSection('placement')}>Placement</a></li>
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'peos' ? 'active' : ''}`} onClick={() => showSection('peos')}>PEOs & POs</a></li>
                         <li className="nav-item"><a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => showSection('contact')}>Contact</a></li>
                    </ul>
               </nav>

               <main className="main-content">
                    <section id="about" className="content-section">
                         <h2>About the Department</h2>
                         <p>The Department of Computer Engineering, established in 1990, has been dedicated to delivering quality technical education and fostering innovation in the field of computing... </p>
                    </section>

                    <section id="vision" className="content-section">
                         <h2>Vision & Mission</h2>
                         <p><strong>Vision:</strong> To be a center of excellence in computer engineering education and research.</p>
                         <p><strong>Mission:</strong> To provide quality education, encourage innovation, and prepare students for global careers in computing.</p>
                    </section>

                    <section id="faculty" className="content-section">
                         <h2>Faculty Profile</h2>
                         <div className="hod-card">
                              <img src="img/cshod.jpg" alt="HOD" />
                              <div>
                                   <h3>Thiru.T.MUTHAMIL SELVAM, M.Tech.</h3>
                                   <p><b>Head of the Department (i/c)</b></p>
                                   <p><a href="mailto:sitcsedepartment@gmail.com">sitcsedepartment@gmail.com</a> | <b>Mobile:</b> 9994499781</p>
                                   <p><b>AICTE ID:</b> 1-477942029</p>
                                   <p>Mr. T. Muthamil Selvam is the Head of the Department of Computer Engineering (i/c), bringing with him a strong academic and professional background...</p>
                              </div>
                         </div>
                         <h2>Teaching Staff</h2>
                         {/* Faculty cards */}
                    </section>

                    <section id="syllabus" className="content-section">
                         <h2>Syllabus</h2>
                         <p>Information about the syllabus will be provided here.</p>
                    </section>

                    <section id="placement" className="content-section">
                         <h2>Placement</h2>
                         <p>Placement statistics and details will go here.</p>
                    </section>

                    <section id="peos" className="content-section">
                         <h2>Program Educational Objectives (PEOs) & POs</h2>
                         {/* PEOs content */}
                    </section>

                    <section id="contact" className="content-section">
                         <h2>Contact</h2>
                         <p>Email: dept-cse@sit.ac.in | Phone: +91-1234567890</p>
                    </section>
               </main>
          </div>
     );
};

export default Departments;