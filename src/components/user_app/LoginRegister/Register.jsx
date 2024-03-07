import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [inputField, changeInputField] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://127.0.0.1:8000/user/register/", inputField)
      .then((response) => {
        if (response.data.status === "success") {
          navigate("/login");
        } else {
          alert("Provide correct data");
        }
      });
  };

  return (
    <div>
      <section className="bg-slate-200">
        <div className="container w-2/5">
          <div className="row d-flex justify-content-center">
            <div className="col col-xl-10">
              <div className="card border border-primary-subtle shadow">
                <div className="d-flex justify-content-center m-3 pb-1">
                  <i className="fas fa-cubes fa-2x me-3 hover:text-sky-800"></i>
                  <span className="h1 fw-bold mb-0 text-blue-500">
                    CARDIOCARE
                  </span>
                </div>
                <form
                  className="row g-3 needs-validation m-1"
                  onSubmit={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <div className="col">
                    <div className="form-group was-validated">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example17">
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control form-control-lg"
                          name="name"
                          value={inputField.name}
                          onChange={inputHandler}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter a valid name (only letters, spaces,
                          hyphens, and apostrophes are allowed).
                        </div>
                      </div>
                    </div>
                    <div className="form-group was-validated">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example17">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                          className="form-control form-control-lg"
                          name="email"
                          value={inputField.email}
                          onChange={inputHandler}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter a valid email like email@gmail.com.
                        </div>
                      </div>
                    </div>
                    <div className="form-group was-validated">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example17">
                          Password
                        </label>
                        <input
                          required
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                          value={inputField.password}
                          onChange={inputHandler}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Password must contain at least one uppercase letter,
                          one lowercase and atleast one digit, and be at least 8
                          characters long.
                        </div>
                      </div>
                    </div>
                    <div className="form-group was-validated">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form2Example17">
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
                    <button className="button" onClick={readValue}>
                      Register
                    </button>
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
