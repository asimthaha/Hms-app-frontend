import React, { useEffect, useState } from "react";
import LabNavbar from "./LabNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LabResults = () => {
  const currentDate = new Date();

  const [data, changeData] = useState([]);
  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/staff/userData/").then((response) => {
      console.log(response.data);
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <>
      <LabNavbar />
      <div className="mt-5">hi</div>
      <div className="mt-4">hi</div>
      <div className="text-center mt-5">
        <h2
          className="mb-12 section-heading wow fadeInDown"
          data-wow-delay="0.3s"
        >
          Add Results
        </h2>
      </div>
      <div className="container w-75">
        <div className="row">
          <div className="col card shadow">
            <form className="row needs-validation g-3" noValidate>
              <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 xol-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  User's Name
                </label>
                <select
                  class="form-select"
                  aria-label="Small select example"
                  required
                >
                  <option selected disabled value="">
                    Open this select menu
                  </option>
                  <option value="1">{data.users}</option>
                </select>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 xol-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Doctor's Name
                </label>
                <select
                  class="form-select"
                  aria-label="Small select example"
                  required
                >
                  <option selected disabled value="">
                    Open this select menu
                  </option>
                  <option value="1">{data.doctors}</option>
                </select>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 xol-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Test Date
                </label>
                <input
                  required
                  type="date"
                  min={currentDate}
                  className="form-control"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 was-validated">
                <label htmlFor="" className="form-label">
                  ECG p wave
                </label>
                <input required type="text" className="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 was-validated">
                <label htmlFor="" className="form-label">
                  Heart Rate
                </label>
                <input required type="text" className="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>
                <select
                  class="form-select"
                  aria-label="Small select example"
                  required
                >
                  <option selected disabled value="">
                    Open this select menu
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Blood Pressure
                </label>
                <input required type="text" className="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Oxygen Saturation
                </label>
                <input
                  required
                  type="number"
                  max={1.0}
                  min={0.0}
                  step={0.05}
                  className="form-control"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">
                  Please choose a value between 0 and 1.
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Cholestrol
                </label>
                <input required type="number" className="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  HDL cholesterol
                </label>
                <input required type="number" className="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  LDL cholesterol
                </label>
                <input required type="number" className="form-control" />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-primary mb-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabResults;
