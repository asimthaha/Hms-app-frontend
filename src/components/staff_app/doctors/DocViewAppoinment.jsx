import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import axios from "axios";

const DocViewAppoinment = () => {
  const [inputData, setInputData] = useState({
    doctorid: sessionStorage.getItem("staffid"),
  });

  const [appoinmentData, setAppoinmentData] = useState([]);

  const inputHandler = (newEvent) => {
    setInputData({
      ...inputData,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://127.0.0.1:8000/staff/appoinmentViewDoctor/", inputData)
      .then((response) => {
        setAppoinmentData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    readValue();
  }, []);

  return (
    <div>
      <DocNavbar />
      <div className="mt-5">hi</div>
      <div className="mt-4">hi</div>
      <div className="text-center mt-5">
        <h2
          className="mb-12 section-heading wow fadeInDown"
          data-wow-delay="0.3s"
        >
          Appoinments
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th className="d-flex justify-content-center" scope="col">
                        Accept
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appoinmentData.map((value, index) => {
                      return (
                        <tr key={`booking_${index}`}>
                          <th scope="row">{value.user.name}</th>
                          <td>{value.date}</td>
                          <td>{value.time}</td>
                          <td className="d-flex justify-content-center">
                            <button
                              className="btn btn-outline-success mr-2"
                              type="button"
                            >
                              Accept
                            </button>
                            <button
                              className="btn btn-outline-danger"
                              type="button"
                            >
                              Decline
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocViewAppoinment;
