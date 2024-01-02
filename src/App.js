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

        <Route path="staffLogin" element={<StaffLogin />} />
        <Route path="doc" element={<DoctorHome />} />
        <Route path="ViewAppoinments" element={<DocViewAppoinment />} />
        <Route path="ViewPatients" element={<ViewPatients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
