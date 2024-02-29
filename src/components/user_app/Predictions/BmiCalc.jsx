import React, { useState } from "react";
import Navbar from "../../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BmiCalc = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("userid")) {
    navigate("/login");
  }
  const [inputField, setInputField] = useState({
    user_id: sessionStorage.getItem("userid"),
    height: "",
    weight: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const [result, setResult] = useState([]);

  const readVal = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/user/bmiCalc/", inputField)
      .then((response) => {
        setResult(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <div className="mt-5">hi</div>
      <section id="bmi" className="bmi container">
        <div className="container d-flex align-items-center flex-column">
          <div className="mt-5 text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Bmi Calculator
            </h2>
          </div>
          <section className="card w-50 d-flex align-items-center">
            <div className="row">
              <div className="col">
                <form className="row g-3 needs-validation">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 px-3 was-validated">
                    <label htmlFor="" className="form-label">
                      Height (in centimeter*)
                    </label>
                    <input
                      type="number"
                      name="height"
                      required
                      id=""
                      value={inputField.height}
                      onChange={inputHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 px-3 was-validated">
                    <label htmlFor="" className="form-label">
                      Weight (in kilogram*)
                    </label>
                    <input
                      type="number"
                      name="weight"
                      required
                      value={inputField.weight}
                      onChange={inputHandler}
                      id=""
                      className="form-control"
                    />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center">
                    <button
                      type="button"
                      onClick={readVal}
                      className="btn btn-outline-primary"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {result == false ? (
              <p className="mt-3">Please provide input to check your bmi</p>
            ) : (
              <div className="row mt-3">
                <div className="col">
                  <div className="row">
                    <div className="col card grid justify-items-stretch text-center">
                      <div className="card-body">
                        <p>Your Bmi is: {result.result}</p>
                        <div className="">
                          <p>You are: {result.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default BmiCalc;
