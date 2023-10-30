import React from "react";
import Header from "../../component/Header/Header";
import FindEmailOrPassWordContent from "../../component/FindEmailOrPasswordContent/FindEmailOrPasswordContent";

const FindEmail = () => {
  return (
    <>
      <Header />
      <FindEmailOrPassWordContent pageType="findemail" />
    </>
  );
};

export default FindEmail;
