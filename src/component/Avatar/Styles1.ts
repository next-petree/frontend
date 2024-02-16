import styled, { css } from "styled-components";

export const SvgWrapper = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Container = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  width: 52px;
  height: 52px;
  left: 83px;
  top: 83px;
`;

export const BadgeContainer = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
`;

export const BadgeInnerContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 8px;
`;

export const ImageContainer = styled.div<{ borderColor?: string }>`
  overflow: hidden;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.borderColor &&
    css`
      border: 3px solid ${props?.borderColor};
    `}
`;

export const CustomImage = styled.img`
  width: 90px;
  height: 90px;

  object-fit: cover;
`;
