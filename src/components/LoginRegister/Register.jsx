import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputField, changeInputField] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios.post("http://127.0.0.1:8000/add/", inputField).then((response) => {
      alert(response.data.status);
    });
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card border border-primary-subtle">
                <div className="d-flex justify-content-center m-3 pb-1">
                  <i className="fas fa-cubes fa-2x me-3 hover:text-sky-800"></i>
                  <span className="h1 fw-bold mb-0 text-blue-500">Medilab</span>
                </div>
                <form className="row g-3 needs-validation m-1">
                  <div className="col col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="form-group was-validated">
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example17">
                          Name
                        </label>
                        <input
                          required
                          type="name"
                          className="form-control form-control-lg"
                          name="name"
                          value={inputField.name}
                          onChange={inputHandler}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter Name.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="form-group was-validated">
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example17">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          value={inputField.email}
                          onChange={inputHandler}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter Email.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="form-group was-validated">
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example17">
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
                          Please enter password.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="form-group was-validated">
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example17">
                          Phone
                        </label>
                        <input
                          required
                          type="number"
                          max="9999999999"
                          className="form-control form-control-lg"
                          name="phone"
                          value={inputField.phone}
                          onChange={inputHandler}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter phone number
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-12 col-xxl-12 col-xl-12 d-flex justify-content-center">
                    <button className="button">Register</button>
                  </div>
                  <div className="col col-12 col-md-12 col-lg-12 col-xxl-12 col-xl-12 d-flex justify-content-center">
                    <p className="mb-3">
                      Already have an account?{" "}
                      <Link to="/login">Login here</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
