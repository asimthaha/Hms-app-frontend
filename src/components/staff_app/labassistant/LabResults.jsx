import React, { useEffect, useState } from "react";
import LabNavbar from "./LabNavbar";
import Select from "react-select";
import axios from "axios";

const LabResults = () => {
  const currentDate = new Date();

  const [data, setData] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/staff/userData/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userOptions =
    data &&
    data.users &&
    data.users.length > 0 &&
    data.users.map((user) => ({
      label: user.name,
      value: user.userid,
    }));

  const doctorOptions =
    data &&
    data.doctors &&
    data.doctors.length > 0 &&
    data.doctors.map((doctor) => ({
      label: doctor.name,
      value: doctor.doctorid,
    }));

  const [inputField, changeInputField] = useState({
    userid: selectedUser ? selectedUser.value : null,
    doctorid: selectedDoctor ? selectedDoctor.value : null,
    testDate: "",
    ecgpwave: "120",
    heartRate: "100",
    bloodGroup: "B+",
    bloodPressure: "120/80",
    oxygenSaturation: 0.95,
    cholesterol: 200,
    hdlcholesterol: 60,
    ldlcholesterol: 90,
    cost: 200,
  });

  const inputHandler = (newEvent) => {
    if (newEvent.target.name === "user") {
      setSelectedUser(newEvent.target.value);
      changeInputField({
        ...inputField,
        userid: selectedUser ? selectedUser.value : null,
      });
    } else if (newEvent.target.name === "doctor") {
      setSelectedDoctor(newEvent.target.value);
      changeInputField({
        ...inputField,
        doctorid: selectedDoctor ? selectedDoctor.value : null,
      });
    } else {
      changeInputField({
        ...inputField,
        [newEvent.target.name]: newEvent.target.value,
      });
    }
  };

  const submitResults = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/staff/saveResults/", inputField)
      .then((response) => {
        alert(response.data.status);
      });

    const param = {
      user_id: inputField.userid,
      status: "False",
      message: "Result",
    };

    axios
      .post("http://127.0.0.1:8000/staff/addNotifications/", param)
      .then((response) => {
        alert(response.data.status);
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
          Results
        </h2>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10 card shadow ">
            <form className="row needs-validation g-3" noValidate>
              <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 xol-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  User's Name
                </label>
                <Select
                  name="user"
                  options={userOptions}
                  value={selectedUser}
                  onChange={(selectedOption) => {
                    setSelectedUser(selectedOption);
                    changeInputField({
                      ...inputField,
                      userid: selectedOption.value,
                    });
                  }}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 xol-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Doctor's Name
                </label>
                <Select
                  name="doctor"
                  options={doctorOptions}
                  value={selectedDoctor}
                  onChange={(selectedOption) => {
                    setSelectedDoctor(selectedOption);
                    changeInputField({
                      ...inputField,
                      doctorid: selectedOption.value,
                    });
                  }}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 xol-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Test Date
                </label>
                <input
                  name="testDate"
                  value={inputField.testDate}
                  onChange={inputHandler}
                  required
                  type="date"
                  min={currentDate}
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>
                <select
                  className="form-select"
                  aria-label="Small select example"
                  name="bloodgroup"
                  value={inputField.bloodGroup}
                  required
                  onChange={inputHandler}
                  defaultValue={""}
                >
                  <option disabled value="">
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
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Blood Pressure
                </label>
                <input
                  name="bloodPressure"
                  value={inputField.bloodPressure}
                  required
                  type="text"
                  className="form-control"
                  onChange={inputHandler}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Oxygen Saturation
                </label>
                <input
                  name="oxygenSaturation"
                  value={inputField.oxygenSaturation}
                  onChange={inputHandler}
                  required
                  type="number"
                  max={1.0}
                  min={0.0}
                  step={0.05}
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please choose a value between 0 and 1.
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Cholestrol
                </label>
                <input
                  name="cholesterol"
                  value={inputField.cholesterol}
                  onChange={inputHandler}
                  min={0}
                  required
                  type="number"
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">eg: 200 mg/dL</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  HDL cholesterol
                </label>
                <input
                  name="hdlcholesterol"
                  value={inputField.hdlcholesterol}
                  onChange={inputHandler}
                  min={0}
                  required
                  type="number"
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Good Cholestrol eg:60 normal
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  LDL cholesterol
                </label>
                <input
                  name="ldlcholesterol"
                  value={inputField.ldlcholesterol}
                  onChange={inputHandler}
                  min={0}
                  required
                  type="number"
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Bad Cholestrol eg:Under 100 normal
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  ECG p wave
                </label>
                <input
                  name="ecgpwave"
                  onChange={inputHandler}
                  value={inputField.ecgpwave}
                  required
                  type="text"
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">81 to 130 ms</div>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Heart Rate
                </label>
                <input
                  name="heartRate"
                  onChange={inputHandler}
                  value={inputField.heartRate}
                  required
                  type="text"
                  className="form-control"
                />

                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">eg:60-100 BPM</div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 was-validated">
                <label htmlFor="" className="form-label">
                  Cost
                </label>
                <input
                  value={inputField.cost}
                  onChange={inputHandler}
                  name="cost"
                  min={0}
                  required
                  type="number"
                  className="form-control"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-end">
                <button
                  type="submit"
                  onClick={submitResults}
                  className="btn btn-outline-primary mb-2"
                >
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
