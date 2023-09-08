import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  overflow-x: hidden;
  display: flex;
`;

const InnerContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <Container {...props}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}
