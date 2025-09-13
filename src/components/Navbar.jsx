import { NavLink } from "react-router-dom";

function Navbar() {
     return (
          <nav className="navbar navbar-expand-lg sticky-top">
               <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold text-dark" to="/">SIT College</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                         <ul className="navbar-nav gap-3">
                              <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to="/departments">Departments</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to="/admission">Admission</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}
export default Navbar;