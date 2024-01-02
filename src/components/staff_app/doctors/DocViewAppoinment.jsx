import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import axios from "axios";

const DocViewAppoinment = () => {
  const [appoinmentData, setAppoinmentData] = useState([
    { time: "", date: "", userid: "", doctorid: "" },
  ]);

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/user/displayBooking/").then((response) => {
      setAppoinmentData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <DocNavbar />
      <div className="mt-5">hi</div>
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
                <table class="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Accept</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appoinmentData.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.name}</th>
                          <td>{value.date}</td>
                          <td>{value.time}</td>
                          <td>
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
