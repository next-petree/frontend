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
  name: string;
  text: string;
  value: boolean;
  size?: Size;
  onChange?: any;
}

export default function Checkbox({
  value,
  text,
  label,
  name,
  size = Size.SMALL,
  onChange,
}: ICheckbox & HTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      <LabelText size={size}>{text}</LabelText>
      <Box id={text} size={size} type="radio" name={name} checked={value} onChange={onChange} />
      <Label htmlFor={text} size={size} checked={value}></Label>
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
  width: 0px;
  height: 0px;
  opacity: 0;
`;
const LabelText = styled.div<{ size: Size }>`
  display: inline-block;
  color: #333;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.54px;
`;

const Label = styled.label<{ size: Size; checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border: ${(props) => {
    if (props.checked) return '1px solid #4EC1BF';
    else return '1px solid #c7c7cc';
  }};
  border-radius: 20px;
  &:after {
    content: ' ';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    background-color: ${(props) => {
      if (props.checked) return '#4EC1BF';
      else return 'transparent';
    }};
  }
`;
