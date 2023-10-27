import CustomLayout from "../Layout/CustomLayout";
import WhiteBox from "../../component/WhiteBox/WhiteBox";
import styled from "styled-components";

import { IMG2 } from "../../assets/images";

const InnerContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 57px;

  position: absolute;
  width: 1248px;
  height: 601px;
  left: 336px;
  top: 370px;

  z-index: 999;

  background-color: aqua;
`;

const InfoContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 57px;

  width: 1248px;
  height: 344px;

  background-color: red;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Headline = styled.div<{ textsize: number }>`
  width: 161px;
  height: 36px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.textsize}px;
  line-height: 36px;
  /* identical to box height, or 129% */

  color: #000000;
`;

const InfoInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;

  width: 1248px;
  height: 251px;

  background-color: azure;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DogInfoContaine = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  width: 674px;
  height: 251px;

  background-color: deeppink;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const DogDescContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 520px;
  height: 137px;

  background-color: gold;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BreedingRegister = () => {
  return (
    <CustomLayout height={1185}>
      <InnerContainer>
        <InfoContainer>
          <Headline textsize={28}>분양 신청하기</Headline>
          <InfoInnerContainer>
            <DogInfoContaine>
              <img
                src={IMG2}
                alt="강아지"
                style={{
                  width: "251px",
                  height: "251px",
                  objectFit: "cover",
                }}
              />
            </DogInfoContaine>
            <DogDescContainer></DogDescContainer>
          </InfoInnerContainer>
        </InfoContainer>
      </InnerContainer>
      <WhiteBox width={1420} height={773} top={284} left={250}></WhiteBox>
    </CustomLayout>
  );
};

export default BreedingRegister;
