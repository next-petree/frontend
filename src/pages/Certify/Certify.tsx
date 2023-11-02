import React from "react";
import Header from "../../component/Header/Header";
import CustomLayout from "../CustomLayout/BreedingLayout";
import CertifyComp from "../../component/Certify/CertifyComp";

export default function Certify() {
  return (
    <CustomLayout height={1800}>
      <Header></Header>
      <CertifyComp></CertifyComp>
    </CustomLayout>
  );
}
