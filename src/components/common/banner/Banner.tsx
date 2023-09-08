import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 24rem;
  background: ${({ theme }) => theme.colors.primary};
  z-index: -1;
`;

export default function Banner() {
  return <Container />;
}
