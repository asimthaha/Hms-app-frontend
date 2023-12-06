import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Topbar />
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <Link className="navbar-brand" to="/">
              Medlab
            </Link>
          </h1>
          <Link to="/" class="logo me-auto">
            <img src="assets/img/logo.png" alt="" class="img-fluid" />
          </Link>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link class="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="nav-link scrollto" to="/departments">
                  Departments
                </Link>
              </li>
              <li>
                <Link class="nav-link scrollto" to="/doctors">
                  Doctors
                </Link>
              </li>
              <li class="dropdown">
                <Link to="#">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#">Drop Down 1</Link>
                  </li>
                  <li class="dropdown">
                    <Link to="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Deep Drop Down 1</Link>
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
                    <Link to="#">Drop Down 2</Link>
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
                <Link class="nav-link scrollto" to="#contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Link to="#appointment" class="appointment-btn scrollto">
            <span class="d-none d-md-inline">Sign in</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
