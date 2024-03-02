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

const DocCharts = ({ userid }) => {
  const [inputData, setInputData] = useState({
    userid: sessionStorage.getItem("userid"),
  });

  const [data, setData] = useState([
    {
      prediction_id: 1,
      age: 55.0,
      sex: 1.0,
      cp: 3.0,
      trestbps: 200.0,
      chol: 200.0,
      fbs: 1.0,
      restecg: 0.0,
      thalach: 140.0,
      exang: 1.0,
      oldpeak: 3.0,
      slope: 2.0,
      ca: 2.0,
      thal: 3.0,
      created_at: "2024-03-01",
      user_id: 1,
    },
  ]);

  const fetchData = () => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/user/predictAnalytics/", inputData)
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
          <Line type="monotone" dataKey="chol" stroke="#8884d8" />
          <Line type="monotone" dataKey="trestbps" stroke="#82ca9d" />
          <Line type="monotone" dataKey="thalach" stroke="#1288" />
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

export default DocCharts;
