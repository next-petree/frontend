import { styled } from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    display: block;
    width: 288px;
    height: 264px;
    margin-bottom: 40px;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.6px;
  }
  p + p {
    margin-top: 12px;
    margin-bottom: 50px;
    strong {
      font-weight: 700;
    }
  }
`;
