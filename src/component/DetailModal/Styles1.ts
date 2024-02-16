import styled from "styled-components";

export const ModalWrapper = styled.div<{
  $customtop: string;
  $customleft: string;
}>`
  width: 900px;
  height: 822px;
  position: absolute;
  /* top: 1140px; */
  top: ${(props) => props.$customtop};
  /* left: 520px; */
  left: ${(props) => props.$customleft};
  z-index: 3;
`;

export const ModalContainer = styled.div`
  top: 23px;
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px #00000017;

  padding: 70px 70px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ClosebtnContainer = styled.div`
  position: absolute;
  left: 864px;
  top: -13px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const DogImage = styled.img`
  width: 278px;
  height: 278px;

  display: block;
  object-fit: cover;
  border-radius: 12px;
`;

export const SmallImgGroup = styled.div``;

export const DetailInfoContainer = styled.div`
  width: 343px;
  height: 251px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailInfoFlexBox = styled.div`
  display: flex;
  gap: 80px;
`;

export const NameContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 221px;
  height: 40px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 20px 0;

  border-top: 1px solid #aeaeae;
  border-bottom: 1px solid #aeaeae;
  /* background-color: aqua; */
`;

export const DetailInfoText = styled.div`
  width: 235px;
  display: flex;
  gap: 9px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;

export const DogImageGroup = styled.div`
  display: flex;
  min-width: 280px;
  gap: 20px;
`;

export const SmallDogImageBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 16px;

  box-shadow: 0px 4px 20px 0px #00000017;
`;

export const Button = styled.button`
  width: 120px;
  height: 52px;
  padding: 29px, 327px;
  border: none;
  border-radius: 16px;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  font-family: Noto Sans KR;
  cursor: pointer;
  background: #4ec1bf;
  color: #ffffff;

  &:disabled {
    background: #b7b7b7;
  }
`;

export const DetailDescContainer = styled.div`
  width: 700px;
  height: 230px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DetailDescTitle = styled.div`
  width: 429px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
`;

export const DetailDesc = styled.div`
  width: 700px;
  height: 189px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #333333;
  white-space: pre-wrap;
`;
