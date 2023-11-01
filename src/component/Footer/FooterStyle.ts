import styled from "styled-components";
import { Link } from "react-router-dom";

import petTreeLogo from "../../assets/images/pets_black_24dp.png";
import petTreeTextImage from "../../assets/images/펫트리.png";
import copyRightLogo from "../../assets/images/Copyright.png";

export const Container = styled.footer`
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: #507375;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.53);
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

export const TitleLogo = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background: url(${petTreeLogo}) no-repeat center;
  background-size: cover;
`;

export const TitleTextLogo = styled.div`
  width: 55.958px;
  height: 18.38px;
  flex-shrink: 0;
  background: url(${petTreeTextImage}) no-repeat center;
  background-size: contain;
`;

export const InnerTextArea = styled.div`
  width: 200px;
  heigth: 100px;
  color: #fff;
`;

export const InnerText = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
  margin-top: 16px;
`;

export const RightArea = styled.div`
  display: flex;
`;

export const CategoriesMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
`;

export const CategoriesLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

export const PagesMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
`;

export const PagesLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

export const BottomArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
`;

export const CopyRightLogo = styled.div`
  width: 11px;
  height: 11px;
  background: url(${copyRightLogo}) no-repeat center;
  background-size: cover;
  margin-right: 1rem;
`;

export const CopyrightBanner = styled.p`
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 13px;
`;
