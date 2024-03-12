import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/user_app/Services";
import Home from "./components/Home";
import Doctors from "./components/user_app/Doctors";
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
import LabHome from "./components/staff_app/labassistant/LabHome";
import LabResults from "./components/staff_app/labassistant/LabResults";
import Payments from "./components/user_app/Payments";
import BmiFull from "./components/user_app/Predictions/BmiFull";
import Test from "./components/Test";
import LabPay from "./components/staff_app/labassistant/LabPay";

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
        <Route path="user/bmi" element={<BmiFull />} />
        <Route path="user/medicines" element={<Medicines />} />
        <Route path="user/results" element={<Results />} />
        <Route path="user/payments" element={<Payments />} />
        <Route path="user/test" element={<Test />} />

        <Route path="staffLogin" element={<StaffLogin />} />
        <Route path="doctor" element={<DoctorHome />} />
        <Route path="doctor/viewAppointments" element={<DocViewAppoinment />} />
        <Route path="doctor/viewPatients" element={<ViewPatients />} />

        <Route path="pharmacist" element={<PharmHome />} />
        <Route path="pharmacist/medicines" element={<PharmMeds />} />
        <Route path="pharmacist/payments" element={<PharmPay />} />

        <Route path="labAssistant" element={<LabHome />} />
        <Route path="labAssistant/results" element={<LabResults />} />
        <Route path="labAssistant/payments" element={<LabPay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
