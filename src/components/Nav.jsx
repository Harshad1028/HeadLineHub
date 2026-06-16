import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm py-1">
        <div className="container">
          
          <NavLink className="navbar-brand fw-bold text-success fs-3" to="/">
            <img src={logo} alt="logo" style={{width:"46px", height:"46px"}} />
            HeadLine<span className="text-white">Hub</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/business" className="nav-link ">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/entertainment" className="nav-link ">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/health" className="nav-link ">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/science" className="nav-link ">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sports" className="nav-link ">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/technology" className="nav-link ">
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

