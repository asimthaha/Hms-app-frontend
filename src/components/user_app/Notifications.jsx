import axios from "axios";
import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Link } from "react-router-dom";

export const NotiStatus = {
  true: true,
  false: false,
};

const Notifications = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const [inputData, changeinputData] = useState({
    userid: sessionStorage.getItem("userid"),
  });
  const [data, changeData] = useState([]);

  const [count, setCount] = useState(0);
  console.log("count", count);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/user/viewNotificationsUser/", inputData)
      .then((response) => {
        debugger;
        changeData(response.data);
        const newCount = response.data.filter(
          (noti) => noti.status === false
        ).length;
        setCount(newCount);
      });
  };

  const updateValue = (data, notification_id) => {
    const param = {
      notificationid: notification_id,
      userid: data.user_id,
      status: "True",
    };
    axios
      .put("http://127.0.0.1:8000/user/updateNotificationsUser/", param)
      .then((response) => {
        changeData(response.data);
        fetchData();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <button onClick={toggleShowA} className="">
        <i className="bi bi-bell-fill"></i>
        <span className="position-relative top-50 start-500 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      </button>
      <ToastContainer
        position="top-center"
        className="p-3"
        style={{ zIndex: 100 }}
      >
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Notifications</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          {data &&
            data.length > 0 &&
            data.map((value, index) => {
              return (
                <Toast.Body key={`notification_${index}`} className="border">
                  {value.message} has been added..
                  <Link
                    to={
                      value.message === "Result"
                        ? "/user/results"
                        : "/user/medicines"
                    }
                  >
                    view now
                  </Link>
                  <div className="d-flex justify-content-end">
                    <button
                      disabled={value.status === NotiStatus.true}
                      onClick={() => updateValue(value, value.notification_id)}
                    >
                      mark as read
                    </button>
                  </div>
                </Toast.Body>
              );
            })}
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Notifications;
