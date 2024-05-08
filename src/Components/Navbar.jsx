import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" href="#" to="/">
                All
              </Link>
              <Link className="nav-link" aria-current="page" href="#" to="/fsd">
                Full Stack Development
              </Link>
              <Link className="nav-link" href="#" to="/ds">
               Data Science
              </Link>
              <Link className="nav-link" href="#" to="/cs">
               Cyber Security
              </Link>
              <Link className="nav-link" href="#" to="/career">
               Career
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
