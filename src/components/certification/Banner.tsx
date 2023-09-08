import Logo from 'components/common/logo/Logo';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 21.375rem;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: -1;
`;

export default function Banner() {
  return (
    <Container>
      <Logo
        color="white"
        size="medium"
        style={{
          opacity: 0.5,
          marginTop: '7rem',
        }}
      />
    </Container>
  );
}
