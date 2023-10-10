import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Describe } from "../pages/Describe";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*"  element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/describe/:id" element={<Describe />} />
      </Routes>
    </BrowserRouter>
  );
}
