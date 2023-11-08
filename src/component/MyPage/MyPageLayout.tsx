import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { BoxsContainer } from "./styles";



const Content = styled.div`
  background-color: white;
  width: 55vw;
  height: 10vw;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  z-index: 100;
`;

const MyPageLayout = () => {
  return (
    <BoxsContainer>
      <Navbar/>
      <Content>aa</Content>
    </BoxsContainer>
  );
};

export default MyPageLayout;
