import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />
      <section id="why-us" class="why-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="content">
                <h3>Why Choose Medilab?</h3>
                <p className="text-white-50">
                  Opting for our hospital means choosing unparalleled healthcare
                  excellence. Our seasoned team of experts, armed with
                  cutting-edge technology, delivers precise diagnoses and
                  pioneering treatments. With a commitment to patient safety and
                  comfort, we ensure a seamless and compassionate healthcare
                  experience. Our comprehensive range of specialties under one
                  roof enhances convenience, while our dedication to ongoing
                  research keeps us at the forefront of medical advancements.
                  Trust us for personalized care that transcends
                  expectations—your health journey deserves nothing less.
                </p>
                <div class="text-center">
                  <a href="#" class="more-btn">
                    Learn More <i class="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-xl-4 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <i class="bx bx-receipt"></i>
                      <h4>Predict your Health</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-stretch">
                    <Link class="icon-box mt-4 mt-xl-0 " to="/doctors">
                      <i class="bx bx-cube-alt"></i>
                      <h4>Doctors</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </Link>
                  </div>
                  <div class="col-xl-4 d-flex align-items-stretch">
                    <Link class="icon-box mt-4 mt-xl-0" to="/departments">
                      <i class="bx bx-images"></i>
                      <h4>Departments</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
