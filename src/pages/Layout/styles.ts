import styled from "styled-components";

export const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: 1920px;
  height: ${(props) => props.height}px;
  overflow-y: scroll;
  background: #ffffff;
`;