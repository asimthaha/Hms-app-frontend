import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/user_app/Services";
import Home from "./components/Home";
import Doctors from "./components/user_app/Doctors";
import Appoinment from "./components/user_app/Appoinment";
import BmiCalc from "./components/user_app/Predictions/BmiCalc";
import HeartPredict from "./components/user_app/Predictions/HeartPredict";
import Login from "./components/user_app//LoginRegister/Login";
import Register from "./components/user_app//LoginRegister/Register";
import StaffLogin from "./components/staff_app/StaffLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="services" element={<Services />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="bmi" element={<BmiCalc />} />
        <Route path="appoinments" element={<Appoinment />} />
        <Route path="predictHeart" element={<HeartPredict />} />
        <Route path="staffLogin" element={<StaffLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
