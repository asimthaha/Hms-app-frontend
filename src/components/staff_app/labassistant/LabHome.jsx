import React, { useEffect, useState } from "react";
import LabNavbar from "./LabNavbar";
import { Link } from "react-router-dom";

const LabHome = () => {
  const username = sessionStorage.getItem("username");
  const [isLoading, changeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      changeLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <LabNavbar />
      {isLoading ? (
        <div id="preloader" className="infinity">
          <i className="bi bi-heart-pulse"></i>
        </div>
      ) : (
        <>
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              {username ? <h2>HEY {username.toLocaleUpperCase()}</h2> : <p></p>}
              <h1>Welcome to CardioCare</h1>
              <h2>Helping People is what we do</h2>
              <Link
                to="/labAssistant/results"
                className="btn-get-started scrollto"
              >
                Get Started
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default LabHome;
