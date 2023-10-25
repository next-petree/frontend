import React from "react";
import styled from "styled-components";

type Props = {
  width: number;
  height: number;
  top: number;
  children?: React.ReactNode;
};

const Box = styled.div<{
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

const WhiteBox = (props: Props) => {
  return (
    <Box
      customWidth={props.width}
      customHeight={props.height}
      customTop={props.top}
    >
      {props.children}
    </Box>
  );
};

export default WhiteBox;
