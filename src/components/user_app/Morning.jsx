import React from "react";

const Morning = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="row mb-3">
          <h2>Morning</h2>
        </div>
        <div className="row form-group was-validated  ">
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="mng-1"
            />
            <label className="form-check-label btn" htmlFor="mng-1">
              09:00 AM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="mng-2"
            />
            <label className="form-check-label btn" htmlFor="mng-2">
              09:30 AM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="mng-3"
            />
            <label className="form-check-label btn" htmlFor="mng-3">
              10:00 AM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="mng-4"
            />
            <label className="form-check-label btn" htmlFor="mng-4">
              10:30 AM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="mng-5"
            />
            <label className="form-check-label btn" htmlFor="mng-5">
              11:00 AM
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Morning;
