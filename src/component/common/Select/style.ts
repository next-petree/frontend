import { styled } from "styled-components";

export const CustomSelect = styled.div`
  position: relative;
  max-width: 240px;
  font-size: 0;
  display: flex;
`;
export const Select = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid #dddddd;
  border-radius: 1rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #939393;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 13px 9px 22px;
    font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.393px;
  }
  & > ul {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 1px));
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 11.45942px 16.3706px 0px rgba(58, 58, 58, 0.08);
    border-radius: 1rem;
    overflow: hidden;
    transition: 0.2s ease-in-out all;
    &.close {
      height: 0;
    }
  }
`;
export const IconSVG = styled.svg`
  align-self: center;
  width: 32px;
  height: 32px;
`;
export const StyledOption = styled.li<{ $isSelected: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#e6f6f6" : "white")};
  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  padding: 15px 32px;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  & + li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 81.9%;
    height: 1px;
    background: #eee;
  }
`;

export const Container = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 1.25rem;
  margin-right: 15px;
  ${(props) => {
    switch (props.size) {
      case "lg":
        return `
        max-width:280px
        `;
      case "md":
        return `
        max-width:240px
        `;
      case "sm":
        return `
        max-width:196px
        `;
      default:
        return "";
    }
  }}
`;
