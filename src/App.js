import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/Services";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Departments from "./components/Departments";
import Appoinment from "./components/Appoinment";
import BmiCalc from "./components/BmiCalc";
import HeartPredict from "./components/Predictions/HeartPredict";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="services" element={<Services />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="departments" element={<Departments />} />
        <Route path="bmi" element={<BmiCalc />} />
        <Route path="appoinments" element={<Appoinment />} />
        <Route path="predictHeart" element={<HeartPredict />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
