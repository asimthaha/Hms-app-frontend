import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import { Link } from "react-router-dom";

const DoctorHome = () => {
  const [isLoading, changeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      changeLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <DocNavbar />
      {isLoading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              {sessionStorage.getItem("name") ? (
                <h2>
                  HEY {sessionStorage.getItem("name").toLocaleUpperCase()}
                </h2>
              ) : (
                <p></p>
              )}
              <h1>Welcome to CardioCare</h1>
              <h2>Helping People is what we do</h2>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </section>
        </>
      )}
      <div>
        <Link
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </Link>
      </div>
    </div>
  );
};

export default DoctorHome;
