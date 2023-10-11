import styled from 'styled-components';

interface IMypageForm {
  children: React.ReactNode;
}

export default function MypageForm({ children }: IMypageForm) {
  return <Container className="container">{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  padding: 80px 46px 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
  margin-bottom: 40px;
  min-height: 300px;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
`;
