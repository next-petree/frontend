import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: -4rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

interface Props {
  children: React.ReactNode;
}

export default function Tooltip({ children }: Props) {
  return <Container>{children}</Container>;
}
