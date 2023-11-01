import React from "react";
import Header from "../../component/Header/Header";
import FindEmailOrPasswordResult from "../../component/FindEmailOrPasswordResult/FindEmailOrPasswordResult";

const FindPasswordResult = () => {
  return (
    <>
      <Header />
      <FindEmailOrPasswordResult pageType="findpasswordresult" />
    </>
  );
};

export default FindPasswordResult;
