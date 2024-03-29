import React, { useEffect, useState } from "react";
import DocNavbar from "./DocNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DocStatus = {
  Accept: "Accept",
  Decline: "Decline",
};

const DocViewAppoinment = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("staffid")) {
    navigate("/staffLogin");
  }

  const [isLoading, changeLoading] = useState(true);
  const [inputData, setInputData] = useState({
    doctorid: sessionStorage.getItem("staffid"),
  });
  const [appoinmentData, setAppoinmentData] = useState([]);

  const getAppointments = () => {
    axios
      .post("http://127.0.0.1:8000/staff/appoinmentViewDoctor/", inputData)
      .then((response) => {
        setAppoinmentData(response.data);
        changeLoading(false);
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
    const noti_data = {
      user_id: data.userid,
      noti_status: "false",
      message: "Your appointment has been " + status + "ed",
    };
    console.log("noti", noti_data);

    axios
      .post("http://127.0.0.1:8000/staff/addNotifications/", noti_data)
      .then((response) => {
        // alert(response.data.status);
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
          View Appoinments
        </h2>
      </div>
      <div className="container">
        {isLoading ? (
          <div id="preloader">
            <i className="bi bi-heart-pulse"></i>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col d-flex justify-content-around">
                  <table className="table table-bordered table-striped w-3/4 shadow">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                        <th
                          className="d-flex justify-content-center"
                          scope="col"
                        >
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
        )}
      </div>
    </div>
  );
};

export default DocViewAppoinment;
