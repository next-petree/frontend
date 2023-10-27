import React from "react";
import Header from "../../component/Header/Header";
import FindEmailOrPassWordContent from "../../component/FindEmailOrPassword/FindEmailOrPassword";

const FindPassword = () => {
  return (
    <>
      <Header />
      <FindEmailOrPassWordContent pageType="findpassword" />
    </>
  );
};

export default FindPassword;
