import React from "react";

const Evening = () => {
  return (
    <>
      <div className="row">
        <h5>Afternoon</h5>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="evng-1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="evng-1">
            02:30 PM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="evng-2"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="evng-2">
            03:00 PM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="evng-3"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="evng-3">
            03:30 PM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="evng-4"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="evng-4">
            04:00 PM
          </label>
        </div>
        <div className="col">
          <input
            type="radio"
            class="btn-check"
            name="time"
            id="evng-5"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-success" for="evng-5">
            04:30 PM
          </label>
        </div>
      </div>
    </>
  );
};

export default Evening;
