import { ReactComponent as BadgeSvg } from 'assets/images/badge.svg';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  bottom: -0.25rem;
  right: -0.25rem;
`;

export default function Badge() {
  return (
    <Container>
      <BadgeSvg />
    </Container>
  );
}
