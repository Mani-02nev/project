import React from 'react';
import './About.css';

const About = () => {
     return (
          <section className="about-page-section">
               <div className="card about-card">
                    <h2>History of SIT</h2>
                    <div className="scroll-box">
                         <p>
                              Thiru V. Seshasayee was born in the year 1890 in the village of Valadi, a suburb of
                              Thiruchirappalli. He came from a middle-class family of modest means.V. Seshasayee studied in
                              St. Joseph’s High School until he matriculated from there. Impressed by the intelligence and
                              technical acumen of Thiru V. Seshasayee, Mr. Winter, Chief Electrical and Signal Engineer of
                              the South Indian Railway, recruited him as an apprentice, which gave Thiru V. Seshasayee an
                              opportunity to learn many new things... [History text continues] ... He died on 19th October, 1958.
                         </p>
                    </div>
               </div>

               <div className="card about-card">
                    <h2>Our Mission</h2>
                    <p>To provide high-quality technical education, encourage research and innovation, and prepare students
                         to become leaders in industry, academia, and entrepreneurship with strong ethical values.</p>
               </div>

               <div className="card about-card">
                    <h2>Our Vision</h2>
                    <p>To be recognized as a world-class center of learning that empowers students with knowledge, skills,
                         and values to address future challenges and contribute positively to society.</p>
               </div>

               <div className="card about-card">
                    <h2>Infrastructure & Facilities</h2>
                    <p>Our campus is equipped with modern classrooms, advanced laboratories, digital libraries, hostels,
                         sports facilities, and innovation centers that provide the best environment for students to grow
                         academically and personally.</p>
               </div>
          </section>
     );
};

export default About;