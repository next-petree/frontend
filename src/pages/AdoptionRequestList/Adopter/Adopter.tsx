import React from 'react';
import Header from '../../../component/Header/Header';
import Banner from '../../../component/Banner/Banner';
import MyPageLayout from '../../../component/MyPage/MyPageLayout';

export default function Adopter() {
  return (
    <>
      <Header />
      <Banner />
      <MyPageLayout where="AdoptListA" />
    </>
  );
}
