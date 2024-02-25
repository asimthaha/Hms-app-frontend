import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Payments from "./Payments";

const Medicines = () => {
  const [input, setInput] = useState({
    userid: sessionStorage.getItem("userid"),
  });

  const [data, changeData] = useState([
    {
      inferences: "",
      date: "",
      medicines_data: [],
      total_rate: "",
      doctorid: "",
    },
  ]);

  const [amount, setAmount] = useState(0);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/user/viewMedicinesUser/", input)
      .then((response) => {
        changeData(response.data);
        console.log(response.data);
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
          Medicines
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div
                    key={`medicine_${index}`}
                    className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
                  >
                    <div className="card shadow">
                      <div className="card-header">
                        <h5 className="card-title">{value.date}</h5>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title d-flex justify-content-center">
                          {value.inferences}
                        </h1>
                        <div className="card-text">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Medicine</th>
                                <th scope="col">Times</th>
                                <th scope="col">Days</th>
                              </tr>
                            </thead>
                            {value.medicines_data.map((meds, index) => {
                              return (
                                <tbody key={`med_${index}`}>
                                  <tr>
                                    <th scope="row">{meds.meds}</th>
                                    <td>{meds.times}</td>
                                    <td>{meds.days}</td>
                                  </tr>
                                </tbody>
                              );
                            })}
                          </table>
                        </div>
                        <h1>Total rate: {value.total_rate}</h1>
                      </div>
                      <div className="card-footer">
                        <Link
                          onClick={(ev) => {
                            ev.preventDefault();
                            setAmount(value.total_rate);
                          }}
                        >
                          <Payments rate={amount} />
                        </Link>
                      </div>
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

export default Medicines;
