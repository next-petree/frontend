import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import petTreeIconImage from "../../assets/icons/header_pets_black_24dp.png";
import petTreeTextImage from "../../assets/icons/header_petree.png";
import userProfileImage from "../../assets/icons/Group 21.png";

export const Container = styled.div`
  position: relative;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 250px 14px 281px;
  border-bottom: 1px solid #f5f5f5;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 10px 0px rgba(119, 119, 119, 0.05);
  backdrop-filter: blur(5px);
`;

export const TitleArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const TitleLogo = styled.div`
  width: 36px;
  height: 36px;
  background: url(${petTreeIconImage}) no-repeat center;
  background-size: contain;
`;

export const TitleText = styled.div`
  width: 55.958px;
  height: 18.38px;
  background: url(${petTreeTextImage}) no-repeat center;
  background-size: contain;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 20px;
`;

export const UserProfileImage = styled.div<{
  imgSrc?: string;
}>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  ${props =>
    props.imgSrc
      ? css`
          background: url(${props.imgSrc}) no-repeat center;
        `
      : css`
          background: url(${userProfileImage}) no-repeat center;
        `}
  background-size: contain;
`;
