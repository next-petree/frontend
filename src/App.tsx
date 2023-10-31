import React from "react";
import { Routes, Route } from "react-router-dom";
import BreedingRegister from "./pages/breeding-register/register/BreedingRegister";
import RegisterFillOut from "./pages/breeding-register/fillout/RegisterFillOut";
import BreedingComplete from "./pages/breeding-register/complete/BreedingComplete";

function App() {
  return (
    <>
      <Routes>
        {/* 예시: <Route path='/example' element={<ExampleComponent />} /> */}
        {/* 위와 같은 방식으로 필요한 라우트를 추가하실 수 있습니다. */}
        <Route path="breeding-register" element={<BreedingRegister />} />
        <Route path="register-fillout" element={<RegisterFillOut />} />
        <Route path="register-complete" element={<BreedingComplete />} />
      </Routes>
    </>
  );
}
export default App;
