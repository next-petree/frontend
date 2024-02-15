import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  border-radius: 80px;
  border: solid 2px #4ec1bf;
  gap: 10px;
  color: #4ec1bf;
  padding: 11px 28px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.03em;

  @media (min-width: 1024px) {
    padding: 11px 28px;
  }

  @media (min-width: 768px ) and (max-width: 1023px) {
    font-size: 12px;
    padding: 11px 28px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    font-weight: 500;
    padding: 0 22px;
  }
`;
