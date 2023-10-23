import React from "react";
import { Routes, Route } from "react-router-dom";
import BreederDetails from "./pages/breeder-details/BreederDetails";

function App() {
  return (
    <>
      <Routes>
        {/* 예시: <Route path='/example' element={<ExampleComponent />} /> */}
        {/* 위와 같은 방식으로 필요한 라우트를 추가하실 수 있습니다. */}
        <Route path="/breeder-details" element={<BreederDetails />} />
      </Routes>
    </>
  );
}
export default App;
