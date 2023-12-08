import axios from "axios";
import React, { useEffect, useState } from "react";

const HeartPredict = () => {
  const [inputField, setInputField] = useState([
    {
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
    },
  ]);

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(inputField);
    axios.post("http://127.0.0.1:8000/user/predictHeart/").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    readValue();
  }, []);

  return (
    <>
      <div
        id="heartPredict"
        className="container d-flex align-items-center flex-column m-3"
      >
        <div className="row">
          <div className="col">
            <h1>Heart Disease Prediction</h1>
          </div>
        </div>
        <div className="row">
          <div className="col card p-3">
            <div className="row g-3">
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="age">
                  Age (20-90):
                </label>
                <input
                  value={inputField.age}
                  onChange={inputHandler}
                  type="number"
                  class="form-control"
                  id="age"
                  name="age"
                  min="20"
                  max="90"
                  required
                />
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="cp">
                  Chest Pain Type:
                </label>
                <select class="form-control" id="cp" name="cp" required>
                  <option value={inputField.cp}></option>
                  <option value={inputField.cp}>No Pain</option>
                  <option value={inputField.cp}>Unusual Chest Pain</option>
                  <option value={inputField.cp}>
                    Non-Heart related Chest Pain
                  </option>
                  <option value={inputField.cp}>Typical Chest Pain</option>
                </select>
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="trestbps">
                  Resting Blood Pressure (e.g., 120 mm Hg):
                </label>
                <input
                  value={inputField.trestbps}
                  onChange={inputHandler}
                  type="number"
                  class="form-control"
                  id="trestbps"
                  name="trestbps"
                  required
                />
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="chol">
                  Cholesterol (e.g., 200 mg/dl):
                </label>
                <input
                  value={inputField.chol}
                  onChange={inputHandler}
                  type="number"
                  class="form-control"
                  id="chol"
                  name="chol"
                  required
                />
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="restecg">
                  Resting ECG Results:
                </label>
                <select
                  class="form-control"
                  id="restecg"
                  name="restecg"
                  required
                >
                  <option value=""></option>
                  <option value="Left Chamber of the Heart has Thickened Walls">
                    Left Chamber of the Heart has Thickened Walls
                  </option>
                  <option value="No Significant Abnormalities Detected">
                    No Significant Abnormalities Detected
                  </option>
                  <option value="Abnormality in Heart's Electrical Signals">
                    Abnormality in Heart's Electrical Signals
                  </option>
                </select>
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="thalach">
                  Maximum Heart Rate Achieved (e.g., 140 bpm):
                </label>
                <input
                  value={inputField.thalach}
                  onChange={inputHandler}
                  type="number"
                  class="form-control"
                  id="thalach"
                  name="thalach"
                  required
                />
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="oldpeak">
                  ECG Changes during Exercise Compared to Rest (e.g., 1.8):
                </label>
                <input
                  value={inputField.oldpeak}
                  onChange={inputHandler}
                  type="number"
                  class="form-control"
                  id="oldpeak"
                  name="oldpeak"
                  step="0.01"
                  required
                />
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="slope">
                  ST Segment on an ECG Changes during Exercise:
                </label>
                <select class="form-control" id="slope" name="slope" required>
                  <option value={inputField.slope}></option>
                  <option value="It Goes Down (Like a Hill)">
                    It Goes Down (Like a Hill)
                  </option>
                  <option value="It Stays Flat (Like Level Ground)">
                    It Stays Flat (Like Level Ground)
                  </option>
                  <option value="It Goes Up (Like an Incline)">
                    It Goes Up (Like an Incline)
                  </option>
                </select>
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="ca">
                  Number of Major Vessels (0-3):
                </label>
                <input
                  value={inputField.ca}
                  onChange={inputHandler}
                  type="number"
                  class="form-control"
                  id="ca"
                  name="ca"
                  min="0"
                  max="3"
                  required
                />
              </div>
              <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label" for="thal">
                  Thalassemia (Type of Blood Disorder):
                </label>
                <select class="form-control" id="thal" name="thal" required>
                  <option disabled></option>
                  <option value="NULL">NULL</option>
                  <option value="No Blood Flow in Some Part of the Heart (Fixed Defect)">
                    No Blood Flow in Some Part of the Heart (Fixed Defect)
                  </option>
                  <option value="Normal Blood Flow">Normal Blood Flow</option>
                  <option value="Abnormal Blood Flow that Can Be Reversed (Reversible Defect)">
                    Abnormal Blood Flow that Can Be Reversed (Reversible Defect)
                  </option>
                </select>
              </div>
              <div class="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                <div className="row">
                  <label className="form-label">Sex:</label>
                  <div class="form-check col d-flex justify-content-center">
                    <input
                      onChange={inputHandler}
                      class="form-check-input"
                      type="radio"
                      name="sex"
                      value="Male"
                      id="male"
                      required
                    />
                    <label
                      className="form-label"
                      class="form-check-label"
                      for="male"
                    >
                      Male
                    </label>
                  </div>
                  <div class="form-check col d-flex justify-content-center">
                    <input
                      onChange={inputHandler}
                      class="form-check-input"
                      type="radio"
                      name="sex"
                      value="Female"
                      id="female"
                      required
                    />
                    <label
                      className="form-label"
                      class="form-check-label"
                      for="female"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                <div className="row">
                  <label className="form-label">
                    Chest Pain during Exercise:
                  </label>
                  <div class="form-check col d-flex justify-content-center">
                    <input
                      value={inputField.exang}
                      onChange={inputHandler}
                      class="form-check-input"
                      type="radio"
                      name="exang"
                      required
                    />
                    <label
                      className="form-label"
                      class="form-check-label"
                      for="exang1"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="form-check col d-flex justify-content-center">
                    <input
                      value={inputField.exang}
                      onChange={inputHandler}
                      class="form-check-input"
                      type="radio"
                      name="exang"
                      required
                    />
                    <label
                      className="form-label"
                      class="form-check-label"
                      for="exang0"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                <div className="row">
                  <label className="form-label">
                    Fasting Blood Sugar (120 mg/dl):
                  </label>
                  <div class="form-check col d-flex justify-content-center">
                    <input
                      value={inputField.fbs}
                      onChange={inputHandler}
                      class="form-check-input"
                      type="radio"
                      name="fbs"
                      required
                    />
                    <label
                      className="form-label"
                      class="form-check-label"
                      for="fbs1"
                    >
                      True
                    </label>
                  </div>
                  <div class="form-check col d-flex justify-content-center">
                    <input
                      value={inputField.fbs}
                      onChange={inputHandler}
                      class="form-check-input"
                      type="radio"
                      name="fbs"
                      required
                    />
                    <label
                      className="form-label"
                      class="form-check-label"
                      for="fbs0"
                    >
                      False
                    </label>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                <button onClick={readValue} type="submit" className="btn">
                  Predict
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeartPredict;
