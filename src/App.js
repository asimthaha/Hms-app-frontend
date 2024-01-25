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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="services" element={<Services />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="predictHeart" element={<HeartPredict />} />
        <Route path="bmi" element={<BmiCalc />} />
        <Route path="medicines" element={<Medicines />} />

        <Route path="staffLogin" element={<StaffLogin />} />
        <Route path="doc" element={<DoctorHome />} />
        <Route path="viewAppoinments" element={<DocViewAppoinment />} />
        <Route path="viewPatients" element={<ViewPatients />} />

        <Route path="pharmacist" element={<PharmHome />} />
        <Route path="meds" element={<PharmMeds />} />
        <Route path="payments" element={<PharmPay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
