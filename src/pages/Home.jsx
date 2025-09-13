import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import experienceImg from '../assets/img/vecteezy_73th-years-anniversary-logo-with-golden-ring-isolated-on_17489884-1.jpg';
import scholarshipsImg from '../assets/img/scor.jpg';
import sportsImg from '../assets/img/sport.png';
import disciplineImg from '../assets/img/discipline.png';
import facultyImg from '../assets/img/EXPORT.png';
import placementImg from '../assets/img/plasment.png';

const Home = () => {
     return (
          <>
               <section className="hero">
                    <h2>Welcome to SIT Trichy</h2>
                    <p>Seshasayee Institute of Technology is dedicated to excellence in education, innovation, and research for a brighter future.</p>
                    <Link to="/about" className="btn btn-warning fw-bold px-4 py-2 shadow">Explore More</Link>
               </section>

               <main className="container">
                    {/* Other sections remain the same */}
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
                    {/* Other sections remain the same */}
               </main>
          </>
     );
};

export default Home;