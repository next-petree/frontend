import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import UNCHECK from 'assets/images/signup/unCheck.svg';
import CHECK from 'assets/images/signup/check.svg';

export enum Size {
  LARGE,
  SMALL,
}

const checkboxSize = {
  [Size.LARGE]: 1.75,
  [Size.SMALL]: 1.25,
};

const labelSize = {
  [Size.LARGE]: 1.25,
  [Size.SMALL]: 1,
};

interface ICheckbox {
  label: string;
  value: boolean;
  size?: Size;
  onChange?: any;
}

export default function Checkbox({
  value,
  label,
  size = Size.SMALL,
  onChange,
}: ICheckbox & HTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      <Box size={size} type="checkbox" name={label} checked={value} onChange={onChange} />
      <Label size={size}>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0 1rem 0;
`;

const Box = styled.input<{ size: Size }>`
  cursor: pointer;
  appearance: none;
  background: url(${UNCHECK}) no-repeat center/100%;
  ${({ size }) => css`
    width: ${checkboxSize[size]}rem;
    height: ${checkboxSize[size]}rem;
    &:checked {
      background: url(${CHECK}) no-repeat center/100%;
    }
  `};
`;

const Label = styled.div<{ size: Size }>`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  ${({ size }) => css`
    font-size: ${labelSize[size]}rem;
  `};
  margin-left: 1rem;
`;
