import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import FindEmail from "./pages/FindEmail/FindEmail";
import FindPassword from "./pages/FindPassword/FindPassWord";
import FindEmailResult from "./pages/FindEmailResult/FindEmailResult";
import FindPasswordResult from "./pages/FindPasswordResult/FindPasswordResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/findemail" element={<FindEmail />} />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/findemailresult" element={<FindEmailResult />} />
        <Route path="/findPasswordresult" element={<FindPasswordResult />} />
      </Routes>
    </>
  );
}
export default App;
