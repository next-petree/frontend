import React from "react";
import Header from "../../component/Header/Header";
import FindEmailResultContent from "../../component/FindEmailOrPasswordResult/FindEmailOrPasswordResult";

const FindEmailResult = () => {
  return (
    <>
      <Header />
      <FindEmailResultContent pageType="findemailresult" />
    </>
  );
};

export default FindEmailResult;
