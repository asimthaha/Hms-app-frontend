import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StaffLogin = () => {
  const [inputField, setInputField] = useState({
    username: "asimthaha",
    password: "1234",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    axios.post("http://127.0.0.1:8000/staff/", inputField).then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        console.log(response.data);
        const getStaffId = response.data[0].staffid;
        const getUserName = response.data[0].username;
        const getPhoto = response.data[0].photo;
        const getName = response.data[0].name;
        const getRole = response.data[0].role;
        sessionStorage.setItem("staffid", getStaffId);
        sessionStorage.setItem("username", getUserName);
        sessionStorage.setItem("photo", getPhoto);
        sessionStorage.setItem("name", getName);
        sessionStorage.setItem("role", getRole);

        switch (getRole) {
          case "Doctor":
            navigate("/doc");
            break;
          case "Pharmacist":
            navigate("/pharmacist");
            break;
          case "LabAssistant":
            navigate("http://127.0.0.1:8000/");
            break;
          default:
            break;
        }
      } else {
        alert("invalid data");
      }
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card shadow">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-flex justify-content-center align-items-center">
                    <img
                      src="assets/img/doctors/doctors-4.jpg"
                      alt="staff login form"
                      className="img-fluid ml-2 shadow rounded"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form className="needs-validation">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3 hover:text-sky-800"></i>
                          <span className="h1 fw-bold mb-0 text-blue-500">
                            Medilab
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Sign into your account
                        </h5>
                        <div className="form-group was-validated">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example17"
                            >
                              Username
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control form-control-lg"
                              name="username"
                              value={inputField.username}
                              onChange={inputHandler}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please enter correct username or Email.
                            </div>
                          </div>
                        </div>
                        <div className="form-group was-validated">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form2Example27"
                            >
                              Password
                            </label>
                            <input
                              required
                              type="password"
                              className="form-control form-control-lg"
                              name="password"
                              value={inputField.password}
                              onChange={inputHandler}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Please enter correct password.
                            </div>
                          </div>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="buttn btn-lg btn-block"
                            type="button"
                            onClick={readVal}
                          >
                            Login
                          </button>
                        </div>
                        <p className="mb-5 pb-lg-2">
                          Don't have an account?{" "}
                          <Link className="text-primary" to="/register">
                            Register here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffLogin;
