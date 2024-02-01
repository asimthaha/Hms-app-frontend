import React from "react";

const TimeBooking = ({ handleTimeChange, availableTimes }) => {
  const timeArr = [
    {
      id: "mng-1",
      time: "10:30 AM",
    },
    {
      id: "mng-2",
      time: "11:00 AM",
    },
    {
      id: "mng-3",
      time: "11:30 AM",
    },
    {
      id: "mng-4",
      time: "12:00 PM",
    },
    {
      id: "mng-5",
      time: "12:30 PM",
    },
    {
      id: "mng-6",
      time: "01:00 PM",
    },
    {
      id: "evng-1",
      time: "02:30 PM",
    },
    {
      id: "evng-2",
      time: "03:00 PM",
    },
    {
      id: "evng-3",
      time: "03:30 PM",
    },
    {
      id: "evng-4",
      time: "04:00 PM",
    },
  ];

  return (
    <>
      <div className="row d-flex justify-content-center mt-2">
        <div className="row mb-3">
          <h2>Time</h2>
        </div>
        <div className="row form-group was-validated">
          {timeArr.map((time, timeIndex) => {
            const isTimeAvailable = availableTimes?.filter(
              (avTime) => avTime.time === time.time
            );
            return (
              <div key={`time_${timeIndex}`} className="col-6 form-check">
                <input
                  onChange={(ev) => {
                    const selectedtime = timeArr.find(
                      (item) => item.id === ev.target.id
                    );
                    handleTimeChange(selectedtime);
                  }}
                  required
                  name="time"
                  disabled={isTimeAvailable.length > 0}
                  type="radio"
                  className={`btn-check form-check-input`}
                  id={time.id}
                />
                <label
                  className={`form-check-label btn m-2 ${
                    isTimeAvailable.length > 0 ? "btn-secondary" : "bg-blue-300"
                  }`}
                  htmlFor={time.id}
                >
                  {time.time}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeBooking;
