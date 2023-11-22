import React from 'react';
import Banner from '../../../component/Banner/Banner';
import Header from '../../../component/Header/Header';
import MyPageLayout from '../../../component/MyPage/MyPageLayout';

export default function Breeder() {
  return (
    <>
      <Header />
      <Banner />
      <MyPageLayout where="AdoptListB" />
    </>
  );
}
