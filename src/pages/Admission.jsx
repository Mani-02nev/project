import React from 'react';
import './Admission.css';

const Admission = () => {
     return (
          <main className="container my-5">
               <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                         <div className="form-card">
                              <h2 className="text-center mb-4 text-primary">Admission Form</h2>
                              <form>
                                   <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your full name" required />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="tel" className="form-control" placeholder="Enter your phone number" required />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Course Applying</label>
                                        <select className="form-select" required>
                                             <option selected disabled>Choose your course</option>
                                             <option>Computer Science</option>
                                             <option>Mechanical</option>
                                             <option>Civil</option>
                                             <option>ECE</option>
                                             <option>EEE</option>
                                        </select>
                                   </div>
                                   <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">Submit Application</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default Admission;