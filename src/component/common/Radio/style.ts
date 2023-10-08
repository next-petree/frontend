import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
`;

export const Box = styled.input<{ size: string }>`
  cursor: pointer;
  appearance: none;
  width: 0px;
  height: 0px;
  opacity: 0;
`;
export const LabelText = styled.div<{ size: string }>`
  display: inline-block;
  color: #333;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.54px;
`;

export const Label = styled.label<{ size: string; checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border: ${(props) => {
    if (props.checked) return "1px solid #4EC1BF";
    else return "1px solid #c7c7cc";
  }};
  border-radius: 20px;
  &:after {
    content: " ";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    background-color: ${(props) => {
      if (props.checked) return "#4EC1BF";
      else return "transparent";
    }};
  }
`;
