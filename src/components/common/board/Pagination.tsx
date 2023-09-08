import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 0.5rem;
`;

const Button = styled.button<{ currentpage?: boolean; disabled?: boolean }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid #dfdfdf;
  background-color: #fff;
  background-color: ${({ disabled }) => (disabled ? '#919EAB' : '#fff')};
  color: ${({ currentpage, theme }) => (currentpage ? theme.colors.accent : '#000')};
  border-color: ${({ currentpage, theme }) => (currentpage ? theme.colors.accent : '#dfdfdf')};
  cursor: pointer;
`;

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  totalPage: number;
  currentpage: number;
  onChange: (page: number) => void;
  first?: boolean;
  last?: boolean;
}

export default function Pagination({ totalPage, currentpage, onChange, first, last, ...props }: Props) {
  return (
    <Container {...props}>
      <Button
        disabled={first}
        onClick={() => {
          if (first) return;
          onChange(currentpage - 1);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15.1602 7.41L10.5802 12L15.1602 16.59L13.7502 18L7.75016 12L13.7502 6L15.1602 7.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </Button>

      {Array.from({ length: totalPage }, (_, i) => (
        <Button key={i} currentpage={currentpage - 1 === i} onClick={() => onChange(i + 1)}>
          {i + 1}
        </Button>
      ))}
      <Button
        disabled={last}
        onClick={() => {
          if (last) return;
          onChange(currentpage + 1);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.83984 7.41L13.4198 12L8.83984 16.59L10.2498 18L16.2498 12L10.2498 6L8.83984 7.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </Button>
    </Container>
  );
}
