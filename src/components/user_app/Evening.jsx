import React from "react";

const Evening = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-2">
        <div className="row mb-3">
          <h2>Evening</h2>
        </div>
        <div className="row form-group was-validated">
          <div className="col form-check">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-1"
            />
            <label className="form-check-label btn" htmlFor="evng-1">
              02:30 PM
            </label>
          </div>
          <div className="col form-check ">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-2"
            />
            <label className="form-check-label btn" htmlFor="evng-2">
              03:00 PM
            </label>
          </div>
          <div className="col form-check ">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-3"
            />
            <label className="form-check-label btn" htmlFor="evng-3">
              03:30 PM
            </label>
          </div>
          <div className="col form-check ">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-4"
            />
            <label className="form-check-label btn" htmlFor="evng-4">
              04:00 PM
            </label>
          </div>
          <div className="col form-check ">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-5"
            />
            <label className="form-check-label btn" htmlFor="evng-5">
              04:30 PM
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evening;
