import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/Services";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Departments from "./components/Departments";
import Appoinment from "./components/Appoinment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="departments" element={<Departments />} />
        <Route path="appoinments" element={<Appoinment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
