import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, getDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerAppoinment = () => {
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 4;
  };
  return (
    <DatePicker
      required
      name="date"
      showIcon
      selected={startDate}
      dateFormat="dd/MM"
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addDays(new Date(), 15)}
      filterDate={isWeekday}
      form="appoinment-form"
      placeholderText="Select a date from today"
    />
  );
};

export default DatePickerAppoinment;
