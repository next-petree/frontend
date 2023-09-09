import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../constants';
import GlobalNav from 'components/common/gnb/GlobalNav';
import Login from './login';
import Main from './main';
import Certification from './certification';
import Guide from './certification/guide';
import PrivateRoute from './PrivateRoute';
import Test from './certification/test';
import Result from './certification/result';
import Explanation from './certification/explanation';
import FindEmail from './auth/find/email';
import FindEmailComplete from './auth/find/email/complete';
import FindPassword from './auth/find/password';
import FindPasswordComplete from './auth/find/password/complete';
import FindPasswordChange from './auth/find/password/change';
import FindPasswordDone from './auth/find/password/done';
import Footer from '../components/common/footer/Footer';
import SignUpStep1 from './signup/step-1';
import SignUpStep2 from './signup/step-2';
import SignUpStep3 from './signup/step-3';
import Breeders from './mypage/breeders';
import Adopt from './mypage/adopt';
import Breed from './mypage/breed';
import Modify from './mypage/modify';
import Profile from './mypage/profile';

import Review from './mypage/review';
import NewBreed from './mypage/breed/new';
import EditBreed from './mypage/breed/edit';
import BreederDetail from './mypage/breeders/[id]';

import { useLogin } from '../api/useLogin';
import UserDetail from './user/[id]';
import Dogs from './dogs';
import Reviews from './mypage/breeders/reviews/reviews';
import Reserve from './reserve';
import ReviewWriting from './mypage/breeders/reviews/reviewWriting';

export default function Router() {
  const { isLoggedIn } = useLogin();
  return (
    <BrowserRouter>
      <GlobalNav isLoggedIn={isLoggedIn()} />
      <Routes>
        <Route path={PATHS.root} element={<Main />} />
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.certification.root} element={<Certification />}>
          <Route path="" element={<Navigate to={PATHS.certification.guide} />} />
          <Route index path={PATHS.certification.guide} element={<Guide />} />
          <Route
            path={PATHS.certification.test.question}
            element={
              <PrivateRoute>
                <Test />
              </PrivateRoute>
            }
          />
          <Route
            path={PATHS.certification.result}
            element={
              <PrivateRoute>
                <Result />
              </PrivateRoute>
            }
          />
          <Route path={PATHS.certification.explanation} element={<Explanation />} />
        </Route>
        {/* 강아지 모아보기 */}
        <Route path={PATHS.dogs.root} element={<Dogs />} />
        <Route path={PATHS.reserve.root} element={<Reserve />} />
        <Route path={PATHS.breeders.root} element={<Breeders />} />
        <Route path={PATHS.breeders.detail} element={<BreederDetail />} />
        <Route path={PATHS.users.detail} element={<UserDetail />} />
        <Route path={PATHS.findEmail} element={<FindEmail />} />
        <Route path={PATHS.findEmailComplete} element={<FindEmailComplete />} />
        <Route path={PATHS.findPassword} element={<FindPassword />} />
        <Route path={PATHS.findPasswordComplete} element={<FindPasswordComplete />} />
        <Route path={PATHS.findPasswordChange} element={<FindPasswordChange />} />
        <Route path={PATHS.findPasswordDone} element={<FindPasswordDone />} />
        <Route path={PATHS.signup1} element={<SignUpStep1 />} />
        <Route path={PATHS.signup2} element={<SignUpStep2 />} />
        <Route path={PATHS.signup3} element={<SignUpStep3 />} />
        <Route path="*" element={<div>404</div>} />

        <Route path={PATHS.mypage.adopt} element={<Adopt />} />
        <Route path={PATHS.mypage.reviews.root} element={<Reviews />} />
        <Route path={PATHS.mypage.reviews.edit} element={<ReviewWriting />} />
        <Route path={PATHS.mypage.breed.root} element={<Breed />} />
        <Route path={PATHS.mypage.breed.new} element={<NewBreed />} />
        <Route path={PATHS.mypage.breed.edit} element={<EditBreed />} />
        <Route path={PATHS.mypage.profile} element={<Profile />} />
        <Route path={PATHS.mypage.modify} element={<Modify />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
