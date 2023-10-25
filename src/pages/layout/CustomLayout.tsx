import React from "react";
import styled from "styled-components";
import Banner from "../../component/Banner";

interface IProps {
  children: React.ReactNode;
  height: number;
}

const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: 1920px;
  height: ${(props) => props.height}px;
  overflow-y: scroll;
  background: #ffffff;
`;

const CustomLayout = ({ height, children }: IProps) => {
  return (
    <Wrapper height={height}>
      <Banner />
      {children}
    </Wrapper>
  );
};

export default CustomLayout;
