import { styled } from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: -14px;
`;

export const DemantionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margin-bottom: 12px;
  }
  textarea {
    width: 968px;
    height: 189px;
    flex-shrink: 0;
    background: #f5f5f5;
    resize: none;
    border: 0px;
    border-radius: 10px;
    padding: 22px 19px;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    font-family: "Noto Sans KR", sans-serif;
    &::placeholder {
      color: #939393;
    }
  }
  .areabox {
    position: relative;
    height: 189px;
    margin-bottom: 24px;
    > span {
      position: absolute;
      bottom: 19px;
      right: 22px;
      color: #000;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.48px;
    }
  }
`;
export const ButtonWrap = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin: 19px auto 0px auto;
  button {
    margin-left: 20px;
  }
  button:button {
    margin-left: 0px;
  }
`;
