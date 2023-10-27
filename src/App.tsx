import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import FindEmail from "./pages/FindEmail/FindEmail";
import FindPassword from "./pages/FindPassword/FindPassWord";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/findemail" element={<FindEmail />} />
        <Route path="/findpassword" element={<FindPassword />} />
      </Routes>
    </>
  );
}
export default App;
