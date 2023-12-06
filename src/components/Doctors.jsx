import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Doctors = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/staff/displayDoctor/")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="team"
        class="py-24 text-center d-flex align-items-center mt-5"
      >
        <div class="container">
          <div class="text-center">
            <h2
              class="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Team
            </h2>
          </div>
          <div class="flex flex-wrap justify-center">
            {data.map((value, index) => {
              return (
                <div class="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 card-group">
                  <div class="card team-item">
                    <div class="team-img relative">
                      <img
                        class="img-fluid"
                        src="assets/img/doctors/doctors-3.jpg"
                        alt=""
                      />
                      <div class="team-overlay">
                        <Link
                          to="/appoinments"
                          class="btn hover:bg-red-500 text-white"
                        >
                          Take Appoinment
                        </Link>
                      </div>
                    </div>
                    <div class="text-center px-5 py-3">
                      <h3 class="team-name">{value.name}</h3>
                      <p>{value.speciality}</p>
                      <div className="row">
                        <div className="col">
                          <p>Since: {value.startYear}</p>
                        </div>
                        <div className="col">
                          <p>{value.qualification}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
