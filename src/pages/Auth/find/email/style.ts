import styled from "styled-components";

export const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 10rem;
  height: 14.688rem;
`;

export const Span = styled.span`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 2rem;
`;

export const TextButton = styled.span`
  cursor: pointer;
  margin-right: 9rem;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
