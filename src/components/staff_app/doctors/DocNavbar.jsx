import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../Topbar";

const DocNavbar = () => {
  return (
    <>
      <Topbar />
      <header id="header" className="fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link className="navbar-brand" to="/doc">
              CARDIOCARE
            </Link>
          </h1>
          <Link to="/doc" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav
            id="navbarTogglerDemo02"
            className="navbar order-last order-lg-0"
          >
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/doc">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/viewAppoinments">
                  Appoinments
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto mr-2" to="/viewPatients">
                  Patients
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default DocNavbar;
