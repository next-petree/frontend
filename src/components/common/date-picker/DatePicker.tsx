import { styled } from 'styled-components';
import Select from '../select/Select';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1.19rem;
`;

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (y: string, m: string, d: string) => void;
}

export default function DatePicker({ onChange, ...props }: Props) {
  return (
    <Container>
      <Select>
        <Select.Option value="0">년</Select.Option>
        <Select.Option value="2023">2023</Select.Option>
      </Select>
      <Select>
        <Select.Option value="0">월</Select.Option>
        <Select.Option value="2023">2023</Select.Option>
      </Select>
      <Select>
        <Select.Option value="0">일</Select.Option>
        <Select.Option value="2023">2023</Select.Option>
      </Select>
    </Container>
  );
}
