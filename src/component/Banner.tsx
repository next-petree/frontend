import React from "react";
import styled from "styled-components";
import { IMG1 } from "../assets/images";

const CustomBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 383px;
  left: 0px;
  top: 0px;
`;

const Banner = () => {
  return (
    <CustomBanner>
      <img src={IMG1} alt="" />
    </CustomBanner>
  );
};

export default Banner;
