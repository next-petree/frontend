import { Routes, Route } from "react-router-dom";
import BreederCollect from "./pages/Collects/BreederCollect";
import DogyCollect from "./pages/Collects/DogyCollect";
import BreedingRegister from "./pages/breeding-register/register/BreedingRegister";
import RegisterFillOut from "./pages/breeding-register/fillout/RegisterFillOut";
import BreedingComplete from "./pages/breeding-register/complete/BreedingComplete";
import BreederDetails from "./pages/breeder-details/BreederDetails";
import CustomerDetails from "./pages/customer-details/CustomerDetails";
import Login from "./pages/Login/Login";
import LoginCheckForKakao from "./pages/Login/LoginCheckForKakao";
import Register from "./pages/Register/Register";
import RegisterDetail from "./pages/Register/RegisterDetail";
import SuccessRegister from "./pages/Register/SuccessRegister";
import FindEmail from "./pages/FindEmail/FindEmail";
import FindPassword from "./pages/FindPassword/FindPassWord";
import FindEmailResult from "./pages/FindEmail/FindEmailResult";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ChangePasswordResult from "./pages/ChangePassword/ChangePasswordResult";
import TestDesc from "./pages/BasicTest/TestDesc/TestDesc";
import Test from "./pages/BasicTest/Test/Test";
import Result from "./pages/BasicTest/Result/Result";
import Answer from "./pages/BasicTest/Answer/Answer";
import Certify from "./pages/Certify/Certify";
import IntroPage from "./pages/IntroPage/IntroPage";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import ModifyAuth from "./pages/MyPage/modifyauth";
import Profile from "./pages/MyPage/profile";
import Breeder from "./pages/AdoptionRequestList/Breeder/Breeder";
import Adopter from "./pages/AdoptionRequestList/Adopter/Adopter";
import RemoveAccount from "./pages/RemoveAccount/RemoveAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/breeders/:pageId" element={<BreederCollect />} />
        <Route path="/dogys/:pageId" element={<DogyCollect />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="oauth/kakao/callback" element={<LoginCheckForKakao />} />
        <Route path="register" element={<Register />} />
        <Route path="register-detail" element={<RegisterDetail />} />
        <Route path="success-register" element={<SuccessRegister />} />
        <Route path="/find-email" element={<FindEmail />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/find-email-result" element={<FindEmailResult />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route
          path="/change-password-result"
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
        <Route path="/basic-test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/certify" element={<Certify />} />
        <Route path="/adoptlist/adopter" element={<Adopter />} />
        <Route path="/adoptlist/breeder" element={<Breeder />} />
        <Route path="/mypage/modifyauth" element={<ModifyAuth />} />
        <Route path="/mypage/profile" element={<Profile />} />
        <Route path="/mypage/remove-account" element={<RemoveAccount />} />
      </Routes>
    </>
  );
}
export default App;
