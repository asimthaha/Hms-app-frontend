import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PharmNavbar from "./PharmNavbar";

const PharmHome = () => {
  const username = sessionStorage.getItem("username");
  const [isLoading, changeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      changeLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <PharmNavbar />
      {isLoading ? (
        <div id="preloader">
          <i className="bi bi-heart-pulse"></i>
        </div>
      ) : (
        <>
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              {username ? <h2>HEY {username.toLocaleUpperCase()}</h2> : <p></p>}
              <h1>Welcome to CardioCare Pharmacist</h1>
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

export default PharmHome;
