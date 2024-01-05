import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewPatients = () => {
  const [inputField, changeInputField] = useState({
    name: "",
  });

  const [patientData, setPatientData] = useState([
    // {
    //   userid: 1,
    //   bookings: [
    //     {
    //       doctor: {
    //         name: "",
    //       },
    //       time: "",
    //       date: "",
    //     },
    //   ],
    //   results: [
    //     {
    //       testDate: "",
    //       ecgpwave: "",
    //       heartRate: "",
    //       bloodGroup: "",
    //       bloodPressure: "",
    //       oxygenSaturation: "",
    //       cholesterol: "",
    //       hdlcholesterol: "",
    //       ldlcholesterol: "",
    //     },
    //   ],
    //   medicines: [
    //     {
    //       inferences: "",
    //       date: "",
    //       med1: "",
    //       times1: "",
    //       days1: "",
    //       med2: null,
    //       times2: null,
    //       days2: null,
    //     },
    //   ],
    //   name: "",
    //   email: "",
    // },
  ]);

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
        {patientData.map((value, index) => {
          return (
            <div key={`patient_${index}`} className="row mt-3">
              <div className="col">
                <div className="row g-3">
                  <div className="col">
                    <div className="card text-center">
                      <div className="card-header d-flex justify-content-between">
                        <div className="" id="nav">
                          <ul
                            className="nav nav-tabs card-header-tabs"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <Link
                                data-bs-target="#carouselControls"
                                data-bs-slide-to="0"
                                aria-label="Slide 1"
                              >
                                <button
                                  className="nav-link active"
                                  id="pills-home-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#meds"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-home"
                                  aria-selected="true"
                                >
                                  Medicines
                                </button>
                              </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link
                                data-bs-target="#carouselControls"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              >
                                <button
                                  className="nav-link"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#results"
                                  type="button"
                                  role="tab"
                                  aria-controls="results"
                                  aria-selected="false"
                                >
                                  Results
                                </button>
                              </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link
                                data-bs-target="#carouselControls"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              >
                                <button
                                  className="nav-link"
                                  id="pills-contact-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#bookings"
                                  type="button"
                                  role="tab"
                                  aria-controls="bookings"
                                  aria-selected="false"
                                >
                                  Bookings
                                </button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <h5 className="card-title">{value.name}</h5>
                        </div>
                      </div>
                      <div
                        id="carouselControls"
                        className="carousel slide"
                        data-bs-interval="false"
                      >
                        <div
                          className="carousel-inner tab-content"
                          id="pills-tabContent"
                        >
                          <div
                            className="carousel-item tab-pane active"
                            id="meds"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <div>
                              <h2>Medicine History</h2>
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Inferences</th>
                                    <th scope="col">Medicines</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {value.medicines.map((meds, index) => {
                                    return (
                                      <tr key={`medicine_${index}`}>
                                        <th scope="row">{meds.date}</th>
                                        <td>{meds.inferences}</td>
                                        <td>
                                          {meds.med1}, {meds.times1},{" "}
                                          {meds.days1}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="carousel-item tab-pane"
                            id="results"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            <div>
                              <h2>Results History</h2>
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Test Date</th>
                                    <th scope="col">ECG, Heart Rate</th>
                                    <th scope="col">Cholesterol Level</th>
                                    <th scope="col">Blood Group, BP</th>
                                    <th scope="col">Oxygen Saturation</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {value.results.map((results, index) => {
                                    return (
                                      <tr key={`result_${index}`}>
                                        <th scope="row">{results.testDate}</th>
                                        <td>
                                          P wave: {results.ecgpwave}, Heart
                                          Rate: {results.heartRate}
                                        </td>
                                        <td>
                                          Total: {results.cholesterol}, HDL:{" "}
                                          {results.hdlcholesterol}, LDL:{" "}
                                          {results.ldlcholesterol}
                                        </td>
                                        <td>
                                          Group: {results.bloodGroup}, Blood
                                          Pressure: {results.bloodPressure}
                                        </td>
                                        <td>
                                          Oxygen : {results.oxygenSaturation}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="carousel-item tab-pane"
                            id="bookings"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                          >
                            <div>
                              <h2>Bookings History</h2>
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Doctor</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {value.bookings.map((booking, index) => {
                                    return (
                                      <tr key={`booking_${index}`}>
                                        <th scope="row">{booking.date}</th>
                                        <td>{booking.time}</td>
                                        <td>{booking.doctor.name}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div className="card-footer bg-transparent">
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewPatients;
