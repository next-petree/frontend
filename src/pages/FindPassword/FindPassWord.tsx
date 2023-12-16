import React from "react";
import Header from "../../component/Header/Header";
import FindEmailOrPassWordContent from "../../component/FindEmailOrPasswordContent/FindEmailOrPasswordContent";

const FindPassword = () => {
  return (
    <>
      <Header />
      <FindEmailOrPassWordContent pageType="findpassword" />
    </>
  );
};

export default FindPassword;
