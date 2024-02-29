import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../Navbar";
import { Link, useNavigate } from "react-router-dom";

const HeartPredict = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("userid")) {
    navigate("/login");
  }
  const [result, setResult] = useState([]);

  const [inputField, setInputField] = useState({
    user_id: sessionStorage.getItem("userid"),
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const inputHandler = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const readValue = () => {
    axios
      .post("http://127.0.0.1:8000/user/predictHeart/", inputField)
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <div className="mt-5">hi</div>
      <div className="mt-4">hi</div>
      <div
        id="heartPredict"
        className="container d-flex align-items-center flex-column m-3"
      >
        <div className="mt-5 text-center">
          <h2
            className="mb-12 section-heading wow fadeInDown"
            data-wow-delay="0.3s"
          >
            Heart Disease Prediction
          </h2>
        </div>
        <div className="row w-3/4">
          <div className="col card p-3">
            <form className="row g-3 needs-validation">
              <div className="form-group was-validated col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="age">
                  Age (20-90):
                </label>
                <input
                  value={inputField.age}
                  onChange={inputHandler}
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  min="20"
                  max="90"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter age.</div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="trestbps">
                  Resting Blood Pressure (e.g., 120 mm Hg):
                </label>
                <input
                  value={inputField.trestbps}
                  onChange={inputHandler}
                  type="number"
                  className="form-control"
                  id="trestbps"
                  name="trestbps"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter Blood Pressure.
                </div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="chol">
                  Cholesterol (e.g., 200 mg/dl):
                </label>
                <input
                  value={inputField.chol}
                  onChange={inputHandler}
                  type="number"
                  className="form-control"
                  id="chol"
                  name="chol"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter Cholestrol.</div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="thalach">
                  Maximum Heart Rate Achieved (e.g., 140 bpm):
                </label>
                <input
                  value={inputField.thalach}
                  onChange={inputHandler}
                  type="number"
                  className="form-control"
                  id="thalach"
                  name="thalach"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please enter Heart Rate.</div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="oldpeak">
                  ECG Changes during Exercise Compared to Rest (0.0 to 3.0):
                </label>
                <input
                  value={inputField.oldpeak}
                  onChange={inputHandler}
                  type="number"
                  className="form-control"
                  id="oldpeak"
                  name="oldpeak"
                  max="3"
                  step="0.1"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter ECG Compared.
                </div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="ca">
                  Number of Major Vessels (0-3):
                </label>
                <input
                  value={inputField.ca}
                  onChange={inputHandler}
                  type="number"
                  className="form-control"
                  id="ca"
                  name="ca"
                  min="0"
                  max="3"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter Number of Vessels.
                </div>
              </div>
              <div className="form-group col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-selct-label" htmlFor="slope">
                  ST Segment on an ECG Changes during Exercise:
                </label>
                <select
                  className="form-select"
                  onChange={inputHandler}
                  id="slope"
                  name="slope"
                  required
                  defaultValue={0}
                >
                  <option disabled value="0">
                    select
                  </option>
                  <option value="1">It Goes Down (Like a Hill)</option>
                  <option value="2">It Stays Flat (Like Level Ground)</option>
                  <option value="3">It Goes Up (Like an Incline)</option>
                </select>
              </div>
              <div className="form-group col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="restecg">
                  Resting ECG Results:
                </label>
                <select
                  className="form-select"
                  id="restecg"
                  name="restecg"
                  defaultValue={0}
                  required
                  onChange={inputHandler}
                >
                  <option value="0" disabled>
                    select
                  </option>
                  <option value="1">
                    Left Chamber of the Heart has Thickened Walls
                  </option>
                  <option value="0">
                    No Significant Abnormalities Detected
                  </option>
                  <option value="2">
                    Abnormality in Heart's Electrical Signals
                  </option>
                </select>
              </div>
              <div className="form-group col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="thal">
                  Thalassemia (Type of Blood Disorder):
                </label>
                <select
                  className="form-select"
                  onChange={inputHandler}
                  id="thal"
                  name="thal"
                  required
                  defaultValue={0}
                >
                  <option disabled value="0">
                    select
                  </option>
                  <option value="6">
                    No Blood Flow in Some Part of the Heart (Fixed Defect)
                  </option>
                  <option value="3">Normal Blood Flow</option>
                  <option value="7">
                    Abnormal Blood Flow that Can Be Reversed (Reversible Defect)
                  </option>
                </select>
              </div>
              <div className="form-group col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" htmlFor="cp">
                  Chest Pain Type:
                </label>
                <select
                  className="form-select"
                  onChange={inputHandler}
                  id="cp"
                  defaultValue={0}
                  name="cp"
                  required
                >
                  <option value="0" disabled>
                    select
                  </option>
                  <option value="4">No Pain</option>
                  <option value="3">Unusual Chest Pain</option>
                  <option value="2">Non-Heart related Chest Pain</option>
                  <option value="1">Typical Chest Pain</option>
                </select>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                <div className="row">
                  <label className="form-label">Sex:</label>
                  <div className="form-check col d-flex justify-content-center">
                    <input
                      onChange={inputHandler}
                      className="form-check-input"
                      type="radio"
                      name="sex"
                      value="1"
                      id="male"
                      required
                    />
                    <label
                      className="form-check-label form-label"
                      htmlFor="male"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check col d-flex justify-content-center">
                    <input
                      onChange={inputHandler}
                      className="form-check-input"
                      type="radio"
                      name="sex"
                      value="0"
                      id="female"
                      required
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                <div className="row">
                  <label>Chest Pain during Exercise:</label>
                  <div className="form-check col d-flex justify-content-center">
                    <input
                      value="1"
                      onChange={inputHandler}
                      className="form-check-input"
                      type="radio"
                      name="exang"
                      required
                    />
                    <label className="form-check-label" htmlFor="exang1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check col d-flex justify-content-center">
                    <input
                      value="0"
                      onChange={inputHandler}
                      className="form-check-input"
                      type="radio"
                      name="exang"
                      required
                    />
                    <label className="form-check-label" htmlFor="exang0">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                <div className="row">
                  <label className="form-label">
                    Fasting Blood Sugar (120 mg/dl):
                  </label>
                  <div className="form-check col d-flex justify-content-center">
                    <input
                      value="1"
                      onChange={inputHandler}
                      className="form-check-input"
                      type="radio"
                      name="fbs"
                      required
                    />
                    <label className="form-check-label" htmlFor="fbs1">
                      True
                    </label>
                  </div>
                  <div className="form-check col d-flex justify-content-center">
                    <input
                      value="0"
                      onChange={inputHandler}
                      className="form-check-input"
                      type="radio"
                      name="fbs"
                      required
                    />
                    <label className="form-check-label" htmlFor="fbs0">
                      False
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group was-validated col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <button
                  onClick={readValue}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  Predict
                </button>
              </div>
            </form>
          </div>
        </div>
        {result == "" ? (
          <p className="mt-3">Please provide input to check your health</p>
        ) : (
          <div className="row mt-3">
            <div className="col">
              <div className="row">
                <div className="col card grid justify-items-stretch text-center">
                  <div className="card-body">
                    <h2 className="text-2xl">{result.result}</h2>
                    <div className="card mt-2">
                      <p>Here are some tips: {result.tips}</p>
                    </div>
                    <div className="card mt-2">
                      <p>
                        Here are some youtube Links:{" "}
                        <a href={result.youtube_links}>
                          {result.youtube_links}
                        </a>
                      </p>
                    </div>
                    <div className="m-3">
                      <Link
                        to="/user/doctors"
                        type="button"
                        className="btn btn-outline-primary"
                      >
                        Take Appoinment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeartPredict;
