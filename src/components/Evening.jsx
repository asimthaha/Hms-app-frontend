import React from "react";

const Evening = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-2">
        <div className="row mb-3">
          <h2>Evening</h2>
        </div>
        <div className="row form-group">
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-1"
              autocomplete="off"
              checked
            />
            <label className="form-check-label btn" for="evng-1">
              02:30 PM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-2"
              autocomplete="off"
              checked
            />
            <label className="form-check-label btn" for="evng-2">
              03:00 PM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-3"
              autocomplete="off"
              checked
            />
            <label className="form-check-label btn" for="evng-3">
              03:30 PM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-4"
              autocomplete="off"
              checked
            />
            <label className="form-check-label btn" for="evng-4">
              04:00 PM
            </label>
          </div>
          <div className="col form-check col-12">
            <input
              required
              type="radio"
              className="btn-check form-check-input"
              name="time"
              id="evng-5"
              autocomplete="off"
              checked
            />
            <label className="form-check-label btn" for="evng-5">
              04:30 PM
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evening;
