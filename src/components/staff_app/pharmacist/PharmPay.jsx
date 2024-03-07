import React, { useEffect, useState } from "react";
import PharmNavbar from "./PharmNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PharmPay = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("staffid")) {
    navigate("/staffLogin");
  }
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/staff/viewPayments/").then((response) => {
      changeData(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <PharmNavbar />
      <div className="container">
        <div className="mt-5">hi</div>
        <div className="mt-5">hi</div>

        <div className="text-center my-5">
          <h2 className="section-heading wow fadeInDown" data-wow-delay="0.3s">
            Medicines
          </h2>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-around">
            {data.map((value, index) => {
              return (
                <div key={`payments_${index}`} className="card shadow">
                  <div className="card-header">Name: {value.user.name}</div>
                  <div className="card-body">
                    Amount {value.amount} recieved
                    <div>{value.user.email}</div>
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

export default PharmPay;
