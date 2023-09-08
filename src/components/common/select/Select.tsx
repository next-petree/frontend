import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import ArrowImg from 'assets/images/component/select/arrow.svg';

const Container = styled.select`
  border: 1px solid #ddd;
  border-radius: 1rem;
  width: 100%;
  height: 3rem;
  color: #939393;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;
  padding: 0 1.37rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  background: url(${ArrowImg}) no-repeat 95% 50%/15px auto;
  background-color: #f5f5f5;
  background-size: 30px;
`;

type Props = HTMLAttributes<HTMLSelectElement>;

export default function Select(props: Props) {
  return <Container {...props} />;
}

interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
}

Select.Option = function Option({ children, value, ...props }: OptionProps) {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
};
