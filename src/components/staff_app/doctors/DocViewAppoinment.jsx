import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import axios from "axios";

export const DocStatus = {
  Accept: "Accept",
  Decline: "Decline",
};

const DocViewAppoinment = () => {
  const [inputData, setInputData] = useState({
    doctorid: sessionStorage.getItem("staffid"),
  });
  const [appoinmentData, setAppoinmentData] = useState([]);

  const getAppointments = () => {
    axios
      .post("http://127.0.0.1:8000/staff/appoinmentViewDoctor/", inputData)
      .then((response) => {
        setAppoinmentData(response.data);
        console.log(response.data);
      });
  };

  const toggleStatus = (data, status) => {
    const param = {
      bookingid: data.bookingid,
      status: status,
    };

    axios
      .put("http://127.0.0.1:8000/staff/appoinmentStatusUpdateDoctor/", param)
      .then((response) => {
        setAppoinmentData(response.data);
        getAppointments();
      });
  };

  useEffect(() => {
    getAppointments();
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
              <div className="col d-flex justify-content-around">
                <table className="table table-bordered table-striped w-3/4">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Status</th>
                      <th className="d-flex justify-content-center" scope="col">
                        Accept
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appoinmentData &&
                      appoinmentData.length > 0 &&
                      appoinmentData.map((value, index) => {
                        return (
                          <tr key={`booking_${index}`}>
                            <th scope="row">{value.user.name}</th>
                            <td>{value.date}</td>
                            <td>{value.time}</td>
                            <td>{value.status}</td>
                            <td className="d-flex justify-content-center">
                              <button
                                className="btn btn-outline-success mr-2"
                                type="button"
                                disabled={value.status === DocStatus.Accept}
                                onClick={() =>
                                  toggleStatus(value, DocStatus.Accept)
                                }
                              >
                                Accept
                              </button>
                              <button
                                className="btn btn-outline-danger"
                                type="button"
                                disabled={value.status === DocStatus.Decline}
                                onClick={() =>
                                  toggleStatus(value, DocStatus.Decline)
                                }
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
