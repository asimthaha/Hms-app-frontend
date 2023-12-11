import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Topbar />
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link className="navbar-brand" to="/">
              Medlab
            </Link>
          </h1>
          <Link to="/" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/departments">
                  Departments
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/doctors">
                  Doctors
                </Link>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Health Care</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#">Drop Down</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Predict Diseases</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="/predictHeart">Heart Disease</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 2</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 3</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 4</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/bmi">Bmi Calculator</Link>
                  </li>
                  <li>
                    <Link to="#">Drop Down 3</Link>
                  </li>
                  <li>
                    <Link to="#">Drop Down 4</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Link to="/login" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Sign in</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
