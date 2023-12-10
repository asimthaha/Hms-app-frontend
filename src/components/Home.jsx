import React from "react";
import Navbar from "./Navbar";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Medilab</h1>
          <h2>Helping People is what we do</h2>
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      <Services />
    </>
  );
};

export default Home;
