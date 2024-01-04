import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewPatients = () => {
  const [inputField, changeInputField] = useState({
    name: "",
  });

  const [patientData, setPatientData] = useState([]);

  const inputHandler = (event) => {
    changeInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/staff/searchPatient/", inputField)
      .then((response) => {
        setPatientData(response.data);
        console.log(response.data);
      });
  };

  return (
    <>
      <DocNavbar />
      <div className="mt-5">hi</div>
      <div className="mt-4">hi</div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Search Patients:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Search Patients Name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-outline-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {patientData.map((value, index) => {
              return (
                <div key={`patient_${index}`} className="row g-3">
                  <div className="col">
                    <div className="card text-center h-80">
                      <div className="card-header d-flex justify-content-between">
                        <div className="">
                          <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                              <Link className="nav-link active" href="#">
                                Medicines
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" href="#">
                                Patient
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" href="#">
                                Bookings
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <h5 className="card-title">{value.name}</h5>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.email}</p>
                      </div>
                      <div class="card-footer bg-transparent">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Add Medicine
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPatients;
