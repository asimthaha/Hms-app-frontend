import React, { useEffect, useState } from "react";
import PharmNavbar from "./PharmNavbar";
import axios from "axios";

const PharmMeds = () => {
  const [data, changeData] = useState([
    {
      medicineid: 24,
      user: {
        userid: 1,
        name: "ASIM THAHA AZEEZ",
        email: "iamasimthaha@gmail.com",
        password: "1234",
        phone: 8281616294,
      },
      inferences: "chest pain",
      date: "2024-01-12",
      medicines_data: [
        {
          meds: "paracetamol",
          times: "3 times",
          days: "5 days",
        },
        {
          meds: "paracetamol",
          times: "3 times",
          days: "5 days",
        },
      ],
      userid: 1,
      doctorid: 1,
    },
    {
      medicineid: 25,
      user: {
        userid: 1,
        name: "ASIM THAHA AZEEZ",
        email: "iamasimthaha@gmail.com",
        password: "1234",
        phone: 8281616294,
      },
      inferences: "",
      date: "2024-01-12",
      medicines_data: [],
      userid: 1,
      doctorid: 1,
    },
  ]);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/staff/viewMedicinePharmacist/")
      .then((response) => {
        changeData(response.data);
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
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 card-group">
                    <div className="card text-center">
                      <div className="card-header d-flex justify-content-start">
                        {value.user.name}
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          {value.medicines_data.map((meds, index) => {
                            return (
                              <li className="list-group-item">
                                {meds.meds}, {meds.times}, {meds.days}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmMeds;
