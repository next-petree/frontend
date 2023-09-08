import { styled } from 'styled-components';

const Container = styled.ul`
  max-height: 300px;
  overflow-y: scroll;
  position: absolute;
  list-style: none;
  padding: 0.5rem;
  background-color: #fff;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  z-index: 3;
  margin-top: 3.5rem;
`;

export default function Option({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

Option.Item = styled.li`
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    mark {
      color: #fff;
    }
  }
`;

Option.Text = styled.span`
  mark {
    transition: all 0.15s ease-in-out;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 900;
  }
`;
