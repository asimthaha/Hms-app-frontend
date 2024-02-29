import React, { useEffect, useState } from "react";
import axios from "axios";

const BmiCharts = () => {
  const [inputData, setInputData] = useState({
    userid: sessionStorage.getItem("userid"),
  });

  const [data, setData] = useState([
    { bmi_id: 1, weight: 50.0, height: 121.0, user_id: 6 },
  ]);

  const fetchData = () => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/user/bmiAnalytics/", inputData)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>hiiii</div>;
};

export default BmiCharts;
