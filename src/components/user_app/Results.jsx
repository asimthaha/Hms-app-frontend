import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("userid")) {
    navigate("/login");
  }

  const [inputData, setInputData] = useState({
    userid: sessionStorage.getItem("userid"),
  });

  const [data, setData] = useState([
    {
      resultid: 2,
      doctors: {
        staffid: 1,
        name: "Athul Abraham",
      },
      testDate: "2024-02-01",
      ecgpwave: "120",
      heartRate: "100",
      bloodGroup: "A+",
      bloodPressure: "120/80",
      oxygenSaturation: "0.90",
      cholesterol: 200,
      hdlcholesterol: 70,
      ldlcholesterol: 90,
      userid: 1,
      doctorid: 1,
    },
  ]);

  const fetchData = () => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/user/viewResultsUser/", inputData)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-5">hi</div>
      <div className="mt-3">hi</div>
      <div className="mt-5 text-center">
        <h2
          className="mb-12 section-heading wow fadeInDown"
          data-wow-delay="0.3s"
        >
          Results
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-around g-3">
              {data.map((value, index) => {
                return (
                  <div
                    key={`results_${index}`}
                    className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
                  >
                    <div className="card border-primary shadow">
                      <div className="card-header d-flex justify-content-between bg-blue-400 hover:bg-blue-500">
                        <div>Doctor: {value.doctors.name}</div>
                        <div>Date: {value.testDate}</div>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-around">
                          <div>ECG: {value.ecgpwave}</div>
                          <div>HeartRate: {value.heartRate}</div>
                        </li>
                        <li className="list-group-item d-flex justify-content-around p-3">
                          <div>Blood Pressure: {value.bloodPressure}</div>
                          <div>Oxygen Saturation: {value.oxygenSaturation}</div>
                        </li>
                        <li className="list-group-item d-flex justify-content-around">
                          <div>Cholestrol: {value.cholesterol}</div>
                          <div>HDL: {value.hdlcholesterol}</div>
                          <div>LDL: {value.ldlcholesterol}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
