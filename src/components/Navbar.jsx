import { Link } from "react-router-dom";

function Navbar() {
     return (
          <nav className="navbar navbar-expand-lg sticky-top"
               style={{ background: "linear-gradient(to right, #e3f2fd, #bbdefb)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
               <div className="container-fluid">
                    <Link className="navbar-brand fw-bold text-dark" to="/">SIT College</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                         <ul className="navbar-nav gap-3">
                              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/department">Departments</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/admission">Admission</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}
export default Navbar;
