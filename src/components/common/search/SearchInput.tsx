import { styled } from 'styled-components';
import Button, { ButtonSize } from '../button/Button';
import { useState } from 'react';

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Input = styled.input`
  background-color: #f5f5f5;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;
  border-radius: 1rem;
  padding: 1rem 1.75rem;
  min-width: 20rem;
  height: 48px;
  box-sizing: border-box;
  border: none;
  transition: outline 0.2s ease-in-out;
  &::placeholder {
    color: #939393;
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  onSearch: (keyword: string) => void;
}

export default function SearchInput({ onSearch, ...props }: Props) {
  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(keyword);
  };

  const onButtonClick = () => {
    onSearch(keyword);
  };

  return (
    <Form onSubmit={handleSubmit} style={{ marginTop: 175 }}>
      <Input onChange={(e) => setKeyword(e.target.value)} value={keyword} {...props} />
      <Button onClick={onButtonClick} buttonSize={ButtonSize.SMALL}>
        검색
      </Button>
    </Form>
  );
}
