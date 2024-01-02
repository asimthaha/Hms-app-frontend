import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const role = sessionStorage.getItem("role");
  const name = sessionStorage.getItem("name");

  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <Link to="mailto:contact@example.com">medlab@gmail.com</Link>
            <i className="bi bi-phone"></i> +91 789 010 0000
          </div>
          <div className="d-none d-lg-flex social-links align-items-end justify-content-end">
            <Link to="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
          <div className="">
            {name ? (
              <Link
                to={role ? "/staffLogin" : "/login"}
                onClick={(ev) => {
                  ev.stopPropagation();
                  ev.preventDefault();
                  sessionStorage.clear();
                }}
                className="buttn"
              >
                LOGOUT
              </Link>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
