import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Describe } from "../pages/Describe";
import { Characteres } from "../pages/Characteres";
import { CharacteresCreate } from "../pages/Characteres/create";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*"  element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/describe/:id" element={<Describe />} />
        <Route path="/characteres/list" element={<Characteres />} />
        <Route path="/characteres/create" element={<CharacteresCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
