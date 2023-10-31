import React from "react";
import Header from "../../component/Header/Header";
import FindEmailOrPasswordResult from "../../component/FindEmailOrPasswordResult/FindEmailOrPasswordResult";

const FindEmailResult = () => {
  return (
    <>
      <Header />
      <FindEmailOrPasswordResult pageType="findemailresult" />
    </>
  );
};

export default FindEmailResult;
