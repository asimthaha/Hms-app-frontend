import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const role = sessionStorage.getItem("role");
  const name = sessionStorage.getItem("name");
  const photo = sessionStorage.getItem("photo");
  const username = sessionStorage.getItem("username");

  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top p-3">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <Link to="mailto:contact@example.com">medlab@gmail.com</Link>
            <i className="bi bi-phone"></i> +91 789 010 0000
          </div>
          <div className="d-flex align-items-center">
            <div className="row">
              {photo ? (
                <img
                  src={"http://127.0.0.1:8000/media/" + photo}
                  alt="doctor thumbnail"
                  className="rounded-full col h-10 w-25"
                />
              ) : (
                <p></p>
              )}
              <p className="col d-flex align-items-center">{username}</p>
            </div>
            <div className="ml-2">
              {name ? (
                <Link
                  onClick={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    sessionStorage.clear();
                    navigate(role ? "/staffLogin" : "/login");
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
      </div>
    </>
  );
};

export default Topbar;
