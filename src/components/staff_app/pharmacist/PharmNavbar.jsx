import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../Topbar";

const PharmNavbar = () => {
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
            <Link className="navbar-brand" to="/pharmacist">
              CARDIOCARE
            </Link>
          </h1>
          <Link to="/pharmacist" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav
            id="navbarTogglerDemo02"
            className="navbar order-last order-lg-0"
          >
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/pharmacist">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/pharmacist/medicines">
                  Medicines
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto mr-2"
                  to="/pharmacist/payments"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default PharmNavbar;
