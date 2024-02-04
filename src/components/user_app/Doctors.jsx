import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import OffCanvas from "./OffCanvas";

const Doctors = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/staff/displayDoctor/")
      .then((response) => {
        changeData(response.data);
        console.log(response.data);
      });
  };

  const [dId, setDoctorId] = useState(0);
  console.log(dId);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="team"
        className="py-24 text-center d-flex align-items-center mt-5"
      >
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Team
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {data.map((value, index) => {
              const linkUrl = `${value.id}`;
              return (
                <div
                  key={`doctor_${index}`}
                  className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 card-group"
                >
                  <div className="card team-item">
                    <div className="team-img relative d-flex justify-content-center flex-column">
                      <img
                        className="img-fluid"
                        src={"http://127.0.0.1:8000/" + value.photo}
                        alt="assets/img/doctors/doctors-3.jpg"
                      />
                      <div className="team-overlay">
                        <Link
                          to={linkUrl}
                          onClick={(ev) => {
                            ev.preventDefault();
                            setDoctorId(value.staffid);
                          }}
                          className="btn bg-blue-500 hover:bg-blue-400 text-white"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasExample"
                        >
                          Take Appoinment
                        </Link>
                      </div>
                    </div>
                    <div className="text-center px-5 py-3">
                      <h3 className="team-name">{value.name}</h3>
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
          <OffCanvas doctorId={dId} />
        </div>
      </section>
    </>
  );
};

export default Doctors;
