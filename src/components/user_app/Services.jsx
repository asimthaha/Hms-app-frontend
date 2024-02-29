import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
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
                <div className="text-center">
                  <a href="/" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <Link
                      className="icon-box mt-4 mt-xl-0"
                      to="/user/predictHeart"
                    >
                      <i className="bx bx-receipt"></i>
                      <h4>Predict your Health</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </Link>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <Link className="icon-box mt-4 mt-xl-0 " to="/user/doctors">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Doctors</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </Link>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <Link className="icon-box mt-4 mt-xl-0" to="/user/results">
                      <i className="bx bx-images"></i>
                      <h4>Results</h4>
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
