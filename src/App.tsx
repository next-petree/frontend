import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import FindEmail from "./pages/FindEmail/FindEmail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/findemail" element={<FindEmail />} />
      </Routes>
    </>
  );
}
export default App;
