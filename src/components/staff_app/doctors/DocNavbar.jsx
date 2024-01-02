import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../../Topbar";

const DocNavbar = () => {
  const photo = sessionStorage.getItem("photo");
  const username = sessionStorage.getItem("username");

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
          <div className="row">
            <img
              src={"http://127.0.0.1:8000/media/" + photo}
              alt="doctor thumbnail"
              className="rounded-full col h-10 w-25"
            />
            <p className="col">{username}</p>
          </div>
          <Link to="/doc" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/doc">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/ViewAppoinments">
                  Appoinments
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto mr-2" to="#">
                  Patients
                </Link>
              </li>
            </ul>
            <form className="form-inline row">
              <input
                className="form-control col ml-3 mr-1 text-sm w-40"
                type="search"
                placeholder="Search Patients"
              />
              <button className="btn btn-outline-success col" type="submit">
                Search
              </button>
            </form>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default DocNavbar;
