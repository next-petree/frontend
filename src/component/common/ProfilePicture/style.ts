import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img<{ $verified: boolean }>`
  cursor: pointer;
  width: ${(props) => props.style?.width ?? "32px"};
  height: ${(props) => props.style?.height ?? "32px"};
  border-radius: 50%;
  border: ${({ $verified }) => ($verified ? `1px solid #FF5757` : "none")};
`;
