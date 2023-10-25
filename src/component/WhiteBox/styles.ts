import styled from "styled-components";

export const Wrapper = styled.div<{
  customWidth: number;
  customHeight: number;
  customTop: number;
}>`
  box-sizing: border-box;

  position: absolute;
  width: ${(props) => `${props.customWidth}px`};
  height: ${(props) => `${props.customHeight}px`};
  left: 430px;
  top: ${(props) => `${props.customTop}px`};

  background: #ffffff;

  /* shadow */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
`;
