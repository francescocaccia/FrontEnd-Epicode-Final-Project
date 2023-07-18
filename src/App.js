import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import InitialFormPage from "./components/InitialFormPage";
import RestaurantPage from "./components/RestaurantPage";
import RegistrationPage from "./components/RegistrationPage";
import AddRestaurant from "./components/AddRestaurant";
import ReservationRestaurant from "./components/ReservationRestaurant";
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";





function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<InitialFormPage />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="/registrationPage" element={<RegistrationPage />} />
        <Route path="/addRestaurant" element={<AddRestaurant />} />
        <Route path="/reservationRestaurant/:restaurantId" element={<ReservationRestaurant />} />
        <Route path="/profilePage" element={<ProfilePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
