import styled from "styled-components";
import { COLOR } from "@assets/constant/style";
export const FooterEl = styled.footer`
  background: #507375;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR", sans-serif;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 62px 14px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.53);
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  span {
    color: ${COLOR.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const FooterItemList = styled.ul`
  color: ${COLOR.white};
  display: flex;
  gap: 60px;
  li.footer-item-title {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 26px; /* 162.5% */
  }
`;
export const FooterItemLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li.link {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const CopyRight = styled.div`
  padding: 24px 0;
  color: ${COLOR.white};
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
