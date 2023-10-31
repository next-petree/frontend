import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BreederDetails from './pages/breeder-details/BreederDetails';
import CustomerDetails from './pages/Customer-details/CustomerDetails';
import Login from './pages/Login/Login';
import FindEmail from './pages/FindEmail/FindEmail';
import FindPassword from './pages/FindPassword/FindPassWord';
import FindEmailResult from './pages/FindEmailResult/FindEmailResult';
import FindPasswordResult from './pages/FindPasswordResult/FindPasswordResult';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import ChangePasswordResult from './pages/ChangePasswordResult/ChangePasswordResult';
import TestDesc from './pages/BasicTest/TestDesc/TestDesc';
import Test from './pages/BasicTest/Test/Test';
import Result from './pages/BasicTest/Result/Result';
import Answer from './pages/BasicTest/Answer/Answer';
import Certify from './pages/Certify/Certify';

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
        {/* 예시: <Route path='/example' element={<ExampleComponent />} /> */}
        {/* 위와 같은 방식으로 필요한 라우트를 추가하실 수 있습니다. */}

        <Route path="/breeder-details" element={<BreederDetails />} />
        <Route path="customer-details" element={<CustomerDetails />} />
        <Route path="/test-description" element={<TestDesc />}></Route>
        <Route path="/basic-test" element={<Test />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/answer" element={<Answer />}></Route>
        <Route path="/certify" element={<Certify />}></Route>
      </Routes>
    </>
  );
}
export default App;
