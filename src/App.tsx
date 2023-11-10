import { Routes, Route } from "react-router-dom";
import BreederCollect from "./pages/Collects/breedercollect";
import DogyCollect from "./pages/Collects/dogycollect";
import BreedingRegister from "./pages/breeding-register/register/BreedingRegister";
import RegisterFillOut from "./pages/breeding-register/fillout/RegisterFillOut";
import BreedingComplete from "./pages/breeding-register/complete/BreedingComplete";
import BreederDetails from "./pages/breeder-details/BreederDetails";
import CustomerDetails from "./pages/customer-details/CustomerDetails";
import Login from "./pages/Login/Login";
import LoginCheckForKakao from "./pages/LoginCheckForKakao/LoginCheckForKakao";
import FindEmail from "./pages/FindEmail/FindEmail";
import FindPassword from "./pages/FindPassword/FindPassWord";
import FindEmailResult from "./pages/FindEmailResult/FindEmailResult";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ChangePasswordResult from "./pages/ChangePasswordResult/ChangePasswordResult";
import TestDesc from "./pages/BasicTest/TestDesc/TestDesc";
import Test from "./pages/BasicTest/Test/Test";
import Result from "./pages/BasicTest/Result/Result";
import Answer from "./pages/BasicTest/Answer/Answer";
import Certify from "./pages/Certify/Certify";
import IntroPage from "./pages/IntroPage/IntroPage";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import ModifyAuth from "./pages/MyPage/modifyauth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/breeders/:pageId" element={<BreederCollect />} />
        <Route path="/dogys/:pageId" element={<DogyCollect />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="oauth/kakao/callback" element={<LoginCheckForKakao />} />
        <Route path="/findemail" element={<FindEmail />} />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/findemailresult" element={<FindEmailResult />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/changepasswordresult"
          element={<ChangePasswordResult />}
        />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/breeding-register" element={<BreedingRegister />} />
          <Route path="/register-fillout" element={<RegisterFillOut />} />
          <Route path="/breeding-complete" element={<BreedingComplete />} />
        </Route>
        <Route path="/breeder/:id" element={<BreederDetails />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/test-description" element={<TestDesc />}></Route>
        <Route path="/basic-test" element={<Test />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/answer" element={<Answer />}></Route>
        <Route path="/certify" element={<Certify />}></Route>
        <Route path="/mypage/modifyauth" element={<ModifyAuth/>}></Route>
      </Routes>
    </>
  );
}
export default App;
