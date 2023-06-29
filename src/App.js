import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import InitialFormPage from "./components/InitialFormPage";
import RestaurantPage from "./components/RestaurantPage";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<InitialFormPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
