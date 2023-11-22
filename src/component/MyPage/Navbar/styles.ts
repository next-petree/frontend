import { styled } from "styled-components";

export const NavBarContainer = styled.div`
  background-color: white;
  width: 16vw;
  height: 113vh;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :first-child {
    &:hover {
      border-radius: 20px 20px 0 0;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const CategoryContainer = styled.div<{$isHere:boolean}>`
  width: 100%;
  height: 8%;
  padding: 1.5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$isHere ? "#f5f5f5" : ""};
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Category = styled.div`
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
  &:hover {
    background-color: #f5f5f5;
    border-radius: 0 0 20px 20px;
  }
`;
