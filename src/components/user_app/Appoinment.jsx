import React, { useState } from "react";
import Morning from "./Morning";
import Evening from "./Evening";
import DatePicker from "react-datepicker";
import { addDays, getDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const Appoinment = () => {
  const [inputField, changeInputField] = useState({
    userid: sessionStorage.getItem("userid"),
    doctorid: 2,
    time: "11:30",
    date: "",
  });

  const inputHandler = (date, event) => {
    setStartDate(date);
    changeInputField({
      ...inputField,
      [event.target.name]: event.target.value,
    });
  };

  const readvalue = () => {
    console.log(inputField);
  };

  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 4;
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <form
              className="row card needs-validation bg-slate-100"
              id="appointment-form"
              onSubmit={(ev) => {
                ev.preventDefault();
              }}
            >
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row my-3">
                  <DatePicker
                    name="date"
                    value={inputField.name}
                    showIcon
                    selected={startDate}
                    dateFormat="dd/MM"
                    onChange={inputHandler}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 15)}
                    filterDate={isWeekday}
                    placeholderText="Select a date from today"
                  />
                </div>
                <Morning />
                <Evening />
              </div>
              <div className="col col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center my-3">
                <button type="submit" onClick={readvalue} className="button">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
