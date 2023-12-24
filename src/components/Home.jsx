import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Services from "./user_app/Services";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, changeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      changeLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              {sessionStorage.getItem("userid") ? (
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
      <Services />
    </>
  );
};

export default Home;
