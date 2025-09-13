import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Department() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: (
      <section>
        <h2>About the Department</h2>
        <p>The Department of Computer Engineering, established in 1990, has been dedicated...</p>
      </section>
    ),
    vision: (
      <section>
        <h2>Vision & Mission</h2>
        <p><b>Vision:</b> To be a center of excellence in computer engineering...</p>
        <p><b>Mission:</b> To provide quality education, encourage innovation...</p>
      </section>
    ),
    contact: (
      <section>
        <h2>Contact</h2>
        <p>Email: dept-cse@sit.ac.in | Phone: +91-1234567890</p>
      </section>
    ),
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div className="main-container">
        {/* Sidebar */}
        <nav className="left-sidebar">
          <div className="nav-header">Department Sections</div>
          <ul className="nav flex-column">
            {Object.keys(sections).map((key) => (
              <li key={key} className="nav-item">
                <a
                  className={`nav-link ${activeSection === key ? "active" : ""}`}
                  onClick={() => setActiveSection(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main className="main-content">
          {sections[activeSection]}
        </main>
      </div>

      <Footer />
    </div>
  );
}
export default Department;
