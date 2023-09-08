import styled from 'styled-components';

interface IMypageForm {
  children: React.ReactNode;
}

export default function MypageForm({ children }: IMypageForm) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  padding: 5.5rem 2.2rem 3rem 2.2rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`;
