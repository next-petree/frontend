import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import FindEmail from "./pages/FindEmail/FindEmail";
import FindPassword from "./pages/FindPassword/FindPassWord";
import FindEmailResult from "./pages/FindEmailResult/FindEmailResult";
import FindPasswordResult from "./pages/FindPasswordResult/FindPasswordResult";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ChangePasswordResult from "./pages/ChangePasswordResult/ChangePasswordResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/findemail" element={<FindEmail />} />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/findemailresult" element={<FindEmailResult />} />
        <Route path="/findpasswordresult" element={<FindPasswordResult />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/changepasswordresult"
          element={<ChangePasswordResult />}
        />
      </Routes>
    </>
  );
}
export default App;
