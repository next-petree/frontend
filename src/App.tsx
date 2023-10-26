import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from './pages/BasicTest/Info/Info';
import Test from './pages/BasicTest/Test/Test';
import Result from './pages/BasicTest/Result/Result';

function App() {
  return (
    <>
      <Routes>
        {/* 예시: <Route path='/example' element={<ExampleComponent />} /> */}
        {/* 위와 같은 방식으로 필요한 라우트를 추가하실 수 있습니다. */}
        <Route path="/basictestinfo" element={<Info />}></Route>
        <Route path="/basictest" element={<Test />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
}
export default App;
