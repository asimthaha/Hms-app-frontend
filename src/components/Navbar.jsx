import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import Notifications from "./user_app/Notifications";

const Navbar = () => {
  return (
    <>
      <Topbar />
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link className="navbar-brand" to="/">
              CARDIOCARE
            </Link>
          </h1>
          <Link to="/" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav id="navbar" className="navbar m-1">
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Health Care</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/user/predictHeart">Heart Disease</Link>
                  </li>
                  <li>
                    <Link to="/user/bmi">Bmi Calculator</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link" to="/user/doctors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/user/results">
                  Results
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/user/medicines">
                  Medicines
                </Link>
              </li>
            </ul>
          </nav>
          <Notifications />
          <div className="ml-2">
            {sessionStorage.getItem("userid") ? (
              <p>{sessionStorage.getItem("name").toLocaleUpperCase()}</p>
            ) : (
              <Link to="/login">
                <span className="buttn">Sign in</span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
