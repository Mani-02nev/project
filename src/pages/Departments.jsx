import React, { useState, useEffect } from 'react';
import './Departments.css';
import hodImg from '../assets/img/cshod.jpg';

const Departments = () => {
     const [activeSection, setActiveSection] = useState('about');

     useEffect(() => {
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
          if (section) {
               section.classList.add('show');
          }
          setActiveSection(id);
     };

     return (
          <div className="main-container">
               <nav className="left-sidebar">
                    {/* ... sidebar links ... */}
               </nav>

               <main className="main-content">
                    {/* ... other sections ... */}
                    <section id="faculty" className="content-section">
                         <h2>Faculty Profile</h2>
                         <div className="hod-card">
                              <img src={hodImg} alt="HOD" />
                              <div>
                                   <h3>Thiru.T.MUTHAMIL SELVAM, M.Tech.</h3>
                                   <p><b>Head of the Department (i/c)</b></p>
                                   <p><a href="mailto:sitcsedepartment@gmail.com">sitcsedepartment@gmail.com</a> | <b>Mobile:</b> 9994499781</p>
                                   <p><b>AICTE ID:</b> 1-477942029</p>
                                   <p>Mr. T. Muthamil Selvam is the Head of the Department of Computer Engineering (i/c), bringing with him a strong academic and professional background...</p>
                              </div>
                         </div>
                         <h2>Teaching Staff</h2>
                         {/* Remember to import and use variables for other images here as well */}
                    </section>
                    {/* ... other sections ... */}
               </main>
          </div>
     );
};

export default Departments;