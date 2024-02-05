import styled from "styled-components";
import { Link } from "react-router-dom";

import petTreeLogo from "../../assets/images/PetreeIconWhite.png";
import petTreeTextImage from "../../assets/images/PetreeTitleBig.png";
import copyRightLogo from "../../assets/images/Copyright.png";

export const Container = styled.footer`
  min-height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: #507375;
  max-width: 100%;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.53);
  @media (max-width: 800px) {
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  flex-direction: column;
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
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const InnerText = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-family: Noto Sans KR;
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
  padding: 0;
  line-height: 26px;
  @media (max-width: 800px) {
    margin-left: 0px;
    text-align: center;
  }
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
  margin-left: 10px;
  @media (max-width: 800px) {
    margin-left: 0px;
    text-align: center;
  }
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
