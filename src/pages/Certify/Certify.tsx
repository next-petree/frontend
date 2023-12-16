import React from 'react';
import Header from '../../component/Header/Header';
import CustomLayout2 from '../Layout/CustomLayout2';
import CertifyComp from '../../component/Certify/CertifyComp';

export default function Certify() {
  return (
    <CustomLayout2 height={1800}>
      <Header></Header>
      <CertifyComp></CertifyComp>
    </CustomLayout2>
  );
}
