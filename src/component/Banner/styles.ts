import styled from 'styled-components';

export const CustomBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 383px;
  left: 0px;
  top: 0px;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  top: 13vh;
  left: 15vw;
`;
export const LogoIcon = styled.img``;
export const Logo = styled.img``;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 17.13px;

  position: absolute;
  width: 386px;
  height: 156px;
  left: calc(50% - 386px / 2 - 417px);
  top: 118px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 17.13px;

  width: 235.78px;
  height: 107.83px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Svg = styled.svg`
  width: 107.83px;
  height: 107.83px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Text = styled.div`
  width: 218.46px;
  height: 71.75px;

  color: #a09185;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
