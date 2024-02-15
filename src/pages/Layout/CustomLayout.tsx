import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";

import styled from "styled-components";

import { ICLProps } from "../../types";
import { Wrapper } from "./Styles1";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const CustomLayout = ({ height, children }: ICLProps) => {
  return (
      <Wrapper height={height}>
        <Header />
        <Banner />
        {/* <Container>{children}</Container> */}
        {children}
      </Wrapper>
  );
};

export default CustomLayout;
