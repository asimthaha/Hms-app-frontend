import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/user_app/Services";
import Home from "./components/Home";
import Doctors from "./components/user_app/Doctors";
import BmiCalc from "./components/user_app/Predictions/BmiCalc";
import HeartPredict from "./components/user_app/Predictions/HeartPredict";
import Login from "./components/user_app//LoginRegister/Login";
import Register from "./components/user_app//LoginRegister/Register";
import StaffLogin from "./components/staff_app/StaffLogin";
import DoctorHome from "./components/staff_app/doctors/DoctorHome";
import DocViewAppoinment from "./components/staff_app/doctors/DocViewAppoinment";
import ViewPatients from "./components/staff_app/doctors/ViewPatients";
import PharmHome from "./components/staff_app/pharmacist/PharmHome";
import PharmMeds from "./components/staff_app/pharmacist/PharmMeds";
import PharmPay from "./components/staff_app/pharmacist/PharmPay";
import Medicines from "./components/user_app/Medicines";
import Results from "./components/user_app/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user/services" element={<Services />} />
        <Route path="user/doctors" element={<Doctors />} />
        <Route path="user/predictHeart" element={<HeartPredict />} />
        <Route path="user/bmi" element={<BmiCalc />} />
        <Route path="user/medicines" element={<Medicines />} />
        <Route path="user/results" element={<Results />} />

        <Route path="staffLogin" element={<StaffLogin />} />
        <Route path="doctor" element={<DoctorHome />} />
        <Route path="doctor/viewPatients" element={<ViewPatients />} />

        <Route path="pharmacist" element={<PharmHome />} />
        <Route path="pharmacist/medicines" element={<PharmMeds />} />
        <Route path="pharmacist/payments" element={<PharmPay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
