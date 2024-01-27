import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

const Results = () => {
  const [inputData, setInputData] = useState({
    userid: sessionStorage.getItem("userid"),
  });

  const [data, setData] = useState([]);

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
            <div className="row d-flex justify-content-around">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                {data.map((value, index) => {
                  return (
                    <div class="card" key={`results_${index}`}>
                      <div class="card-header d-flex justify-content-between">
                        <div>Date: {value.testDate}</div>
                        <div>Blood Group: {value.bloodGroup}</div>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-around">
                          <div>ECG: {value.ecgpwave}</div>
                          <div>HeartRate: {value.heartRate}</div>
                        </li>
                        <li class="list-group-item d-flex justify-content-around">
                          <div>
                            Blood Pressure: {value.bloodPressure}, Oxygen
                          </div>
                          <div>Saturation: {value.oxygenSaturation}</div>
                        </li>
                        <li class="list-group-item d-flex justify-content-around">
                          <div>Cholestrol: {value.cholesterol}</div>
                          <div>HDL: {value.hdlcholesterol}</div>
                          <div>LDL: {value.ldlcholesterol}</div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
