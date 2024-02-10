import { styled } from "styled-components";

export const MenuIcon = styled.button`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 70px;
  width: 30px;
  height: 100px;
  cursor: pointer;
  background-color: #35d8d5;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: upright;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  z-index: 1;
  @media (max-width: 1100px) {
    display: none;
    &.visible {
      display: block;
      position: fixed;
      z-index: 2;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      opacity: 1;
      z-index: 99999;
    }
  }
`;

export const NavBarContainer = styled.div`
  background-color: white;
  width: 16vw;
  height: 113vh;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :first-child {
    border-radius: 20px 20px 0 0;
  }
  @media (max-width: 1100px) {
    display: none;
    &.visible {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: fixed;
      left: 0;
      top: 66px;
      width: 30vw;
      height: 90vh;
      border-radius: 0 20px 20px 0;
    }
    @media (max-width: 550px) {
      &.visible {
        top: 60px;
        width: 70vw;
      }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const CategoryContainer = styled.div<{ $isHere: boolean }>`
  width: 100%;
  height: 8%;
  padding: 1.5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.$isHere ? "#f5f5f5" : "")};
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CategoryContent = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
`;

export const AuthDeleteContainer = styled.div`
  width: 100%;
  height: 8%;
  padding: 1.5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    border-radius: 0 0 20px 20px;
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  height: 8%;
  padding: 1.5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    border-radius: 0 0 20px 20px;
  }
`;

export const LogoutButton = styled.div``;
