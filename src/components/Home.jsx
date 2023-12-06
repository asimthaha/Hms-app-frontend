import React from "react";
import Navbar from "./Navbar";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>Welcome to Medilab</h1>
          <h2>Helping People is what we do</h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
      <Services />
    </>
  );
};

export default Home;
