import styled from "styled-components";

export const Wrapper = styled.div<{
  customwidth: number;
  customheight: number;
  customtop: number;
}>`
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => `${props.customwidth}px`};
  height: ${(props) => `${props.customheight}px`};
  left: 250px;
  top: ${(props) => `${props.customtop}px`};
  background: #ffffff;
  /* shadow */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
`;
