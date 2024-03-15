import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "iamasimthaha@gmail.com",
    password: "asimthaha@123",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    axios.post("http://127.0.0.1:8000/user/", inputField).then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        const getUserId = response.data[0].userid;
        const getName = response.data[0].name;

        sessionStorage.setItem("userid", getUserId);
        sessionStorage.setItem("name", getName);
        navigate("/");
      } else {
        alert("invalid data");
      }
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-end admin">
        <span>
          <Link to={"http://127.0.0.1:8000/admin/"}>
            <i className="bi bi-person-fill-lock opacity-50 m-5 p-5"></i>
          </Link>
        </span>
      </div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card border border-primary-subtle">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid rounded"
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
                              Username or email
                            </label>
                            <input
                              autofocus
                              required
                              type="text"
                              className="form-control form-control-lg"
                              name="email"
                              value={inputField.email}
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
                        <p className="mb-2 pb-lg-2">
                          Don't have an account?{" "}
                          <Link className="text-primary" to="/register">
                            Register here
                          </Link>
                        </p>
                        <p className="mb-5 pb-lg-2">
                          Staff login{" "}
                          <Link className="text-primary" to="/staffLogin">
                            here
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

export default Login;
