import React from "react";

import "./global.css";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Store/Provider";


export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
