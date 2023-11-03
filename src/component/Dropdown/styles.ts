import styled, { css } from "styled-components";

import userProfileImage from "../../assets/icons/Group 21.jpg";

export const Wrapper = styled.div`
  width: 300px;
  height: 168px;
  padding: 22px 26px;
  border-radius: 32px;

  position: absolute;
  top: 80px;
  /* left: 1350px; */
  left: 72%;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px #0000001f;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BottomBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const UserProfileImage = styled.div<{ imgSrc?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;

  ${(props) =>
    props.imgSrc
      ? css`
          background: url(${props.imgSrc}) no-repeat center;
        `
      : css`
          background: url(${userProfileImage}) no-repeat center;
        `}

  background-size: contain;
`;

export const TextBox = styled.div`
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  white-space: pre-wrap;
`;

export const Button = styled.button<{ primary?: boolean }>`
  width: 120px;
  height: 58px;
  border-radius: 16px;
  gap: 10px;
  color: #ffffff;
  cursor: pointer;
  ${(props) =>
    props.primary
      ? css`
          background: #4ec1bf;
          color: #ffffff;
          border: none;
        `
      : css`
          background: #ffffff;
          color: #4ec1bf;
          border: 1px solid #4ec1bf;
        `}
`;
