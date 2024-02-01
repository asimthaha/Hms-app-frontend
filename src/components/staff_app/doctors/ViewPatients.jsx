import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";

const ViewPatients = () => {
  const [inputField, changeInputField] = useState({
    name: "asim",
  });

  const [patientData, setPatientData] = useState([
    // {
    //   userid: 1,
    //   bookings: [
    //     {
    //       bookingid: 1,
    //       doctor: {
    //         name: "Devnand Nair",
    //       },
    //       time: "11:00 PM",
    //       date: "1/17/2024",
    //       userid: 1,
    //       doctorid: 1,
    //     },
    //   ],
    //   results: [
    //     {
    //       resultid: 1,
    //       testDate: "2024-01-04",
    //       ecgpwave: "120",
    //       heartRate: "100",
    //       bloodGroup: "A+",
    //       bloodPressure: "120/80",
    //       oxygenSaturation: "0.95",
    //       cholesterol: 200,
    //       hdlcholesterol: 60,
    //       ldlcholesterol: 100,
    //     },
    //   ],
    //   medicines: [
    //     {
    //       medicineid: 24,
    //       inferences: "chest pain",
    //       date: "2024-01-12",
    //       medicines_data: [
    //         {
    //           meds: "paracetamol",
    //           times: "3 times",
    //           days: "5 days",
    //         },
    //         {
    //           meds: "paracetamol",
    //           times: "3 times",
    //           days: "5 days",
    //         },
    //       ],
    //       userid: 1,
    //       doctorid: 1,
    //     },
    //   ],
    //   name: "ASIM THAHA AZEEZ",
    //   email: "iamasimthaha@gmail.com",
    //   password: "1234",
    //   phone: 8281616294,
    // },
  ]);

  const [uid, setUserId] = useState(0);

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

  useEffect(() => {
    setUserId();
  }, []);

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
                              <h2 className="font-bold">Medicine History</h2>
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
                                          {meds.medicines_data.map(
                                            (meds_data, index) => {
                                              return (
                                                <div key={`meds_data_${index}`}>
                                                  <p>
                                                    {meds_data.meds},{" "}
                                                    {meds_data.times} times,{" "}
                                                    {meds_data.days} days
                                                  </p>
                                                </div>
                                              );
                                            }
                                          )}
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
                              <h2 className="font-bold">Results History</h2>
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
                              <h2 className="font-bold">Bookings History</h2>
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
                      </div>
                      <div className="card-footer bg-transparent">
                        <button
                          onClick={(ev) => {
                            ev.preventDefault();
                            setUserId(value.userid);
                          }}
                          type="button"
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Add Medicine
                        </button>
                      </div>
                      <Modal userId={uid} />
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
