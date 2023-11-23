import React from "react";
import Header from "../../component/Header/Header";
import FindEmailResultContent from "../../component/FindEmailOrPasswordContent/FindEmailOrPasswordResult/FindEmailOrPasswordResult";

const FindEmailResult = () => {
  return (
    <>
      <Header />
      <FindEmailResultContent pageType="findemailresult" />
    </>
  );
};

export default FindEmailResult;
