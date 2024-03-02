import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

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

  return (
    <div>
      <div className="mt-5">
        <LineChart width={500} height={300} data={data}>
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          <Line type="monotone" dataKey="height" stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
};

export default BmiCharts;
