import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    if (
      inputField.email == "admin@gmail.com" &&
      inputField.password == "12345"
    ) {
      navigate("/add");
    } else {
      alert("invalid credentials");
    }
  };

  const navigate = useNavigate();

  return (
    <>
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
                            <label className="form-label" for="form2Example17">
                              Username or email
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
                            <label className="form-label" for="form2Example27">
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
                            className="btn btn-lg btn-block"
                            type="button"
                            onClick={readVal}
                          >
                            Login
                          </button>
                        </div>
                        <p className="mb-5 pb-lg-2">
                          Don't have an account?{" "}
                          <Link to="/register">Register here</Link>
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
