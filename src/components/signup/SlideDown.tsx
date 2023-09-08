import styled from 'styled-components';
import DOWN from 'assets/images/signup/downarrow.svg';

interface ISlideDown {
  title: string;
  content: string;
}

export default function SlideDown({ title, content }: ISlideDown) {
  return (
    <Container>
      <HeaderWrap>
        <HeaderTitle>{title}</HeaderTitle>
        <Button>
          <img src={DOWN} alt="btn" />
        </Button>
      </HeaderWrap>
      <Content>{content}</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  height: 3.625rem;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
`;

const HeaderTitle = styled.span`
  font-weight: 500;
  font-size: 1rem;
  flex: 1;
  color: #000000;
`;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
`;

const Content = styled.div``;
