import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, getDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TimeBooking from "./TimeBooking";

const Appoinment = ({ doctorId }) => {
  const navigate = useNavigate();

  const [availableTimes, setAvailableTimes] = useState([]);

  const [inputField, changeInputField] = useState({
    userid: sessionStorage.getItem("userid"),
    doctorid: "",
    time: "",
    date: "",
    status: "Accept",
  });

  useEffect(() => {
    changeInputField({
      ...inputField,
      doctorid: doctorId,
    });
  }, [doctorId]);

  const handleDatePick = (date) => {
    setStartDate(date);
    const currentDate = new Date(date);
    const yyyy = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1; // Months start at 0!
    let dd = currentDate.getDate();

    changeInputField({
      ...inputField,
      date: dd + "/" + mm + "/" + yyyy,
    });
  };

  useEffect(() => {
    disableAppoinments();
  }, [inputField.date]);

  const readvalue = () => {
    axios
      .post("http://127.0.0.1:8000/user/bookDoctor/", inputField)
      .then((response) => {
        alert(response.data.status);
        navigate("/");
      });
  };

  const disableAppoinments = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/user/disableAppoinments/", inputField)
      .then((response) => {
        // console.log(response.data);
        setAvailableTimes(response.data);
      });
  };

  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 4;
  };

  const handleTimeChange = (timeItem) => {
    changeInputField({
      ...inputField,
      time: timeItem.time,
    });
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <form
              className="row card needs-validation"
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
                    dateFormat="dd/MM/yyyy"
                    onChange={handleDatePick}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 15)}
                    filterDate={isWeekday}
                    placeholderText="Select a date from today"
                  />
                </div>
                <TimeBooking
                  handleTimeChange={handleTimeChange}
                  availableTimes={availableTimes}
                />
              </div>
              <div className="col col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center my-3">
                <button
                  type="submit"
                  onClick={readvalue}
                  className="btn bg-blue-500 text-white"
                >
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
