import { React, useEffect } from "react";
import Register from "./register";
import Home from "./home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Booklist from "./Booklist";
import Profile from "./profile";
import AboutUs from "./aboutus.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<ProtectedRoute />} />
        <Route path="/" element={<Register />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  } else {
    const user = jwtDecode(token);
    console.log(user);
    return <Home />;
  }
}

export default App;
