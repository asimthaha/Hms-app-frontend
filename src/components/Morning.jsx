import React from "react";

const Morning = () => {
  return (
    <>
      <div className="row">
        <h5>Morning</h5>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="mng-1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="mng-1">
            09:00 AM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="mng-2"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="mng-2">
            09:30 AM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="mng-3"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="mng-3">
            10:00 AM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="mng-4"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="mng-4">
            10:30 AM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="mng-5"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="mng-5">
            11:00 AM
          </label>
        </div>
      </div>
    </>
  );
};

export default Morning;
