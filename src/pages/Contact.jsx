import React from 'react';
import './Contact.css';

const Contact = () => {
     return (
          <div className="container my-5">
               <h2 className="contact-heading">Contact Us</h2>
               <div className="row g-4">
                    <div className="col-lg-5">
                         <div className="contact-info">
                              <h4 className="mb-3">Get in Touch</h4>
                              <p><b>📍 Address:</b> SIT College, Trichy, Tamil Nadu, India</p>
                              <p><b>📞 Phone:</b> +91 98765 43210</p>
                              <p><b>✉️ Email:</b> info@sittrichy.ac.in</p>
                              <hr />
                              <iframe
                                   src="https://www.google.com/maps?q=Seshasayee+Institute+of+Technology+Trichy&hl=en&z=16&output=embed"
                                   width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Maps"></iframe>
                         </div>
                    </div>

                    <div className="col-lg-7">
                         <div className="contact-form">
                              <h4 className="mb-3">Send us a Message</h4>
                              <form>
                                   <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your name" required />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Subject</label>
                                        <input type="text" className="form-control" placeholder="Enter subject" />
                                   </div>
                                   <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" rows="5" placeholder="Write your message..." required></textarea>
                                   </div>
                                   <button type="submit" className="btn btn-primary w-100">Send Message</button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Contact;