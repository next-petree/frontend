import React, { ChangeEvent, CSSProperties, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Button, { ButtonSize, ButtonColor } from '../button/Button';

const Container = styled.div`
  display: flex;
  height: 3.62rem;
  margin-bottom: 1.25rem;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.label`
  width: 5.563rem;
  font-size: 1.25rem;
  color: '#000000';
`;

const Input = styled.input`
  width: 21.25rem;
  padding: 1.25rem;
  margin-left: 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #f5f5f5 !important;
  color: #000000;

  &:focus {
    box-shadow: none;
    outline: none;
    background-color: #f5f5f5;
  }
`;

interface IInput {
  label?: string;
  labelStyle?: CSSProperties;
  type: string;
  value: any;
  onChange?: (v: any) => any;
  buttonLabel?: string;
  buttonColor?: ButtonColor;
  onClick?: (v: any) => any;
}

export default function InputButton({
  label,
  labelStyle,
  type,
  value,
  onChange,
  buttonLabel,
  buttonColor,
  onClick,
}: IInput & HTMLAttributes<HTMLInputElement>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <Container>
      <Label style={labelStyle}>{label}</Label>
      <Input type={type} value={value} onChange={changeHandler} />
      {buttonColor && (
        <Button
          buttonSize={ButtonSize.SMALL}
          buttonColor={buttonColor}
          onClick={onClick}
          style={{ marginLeft: '1.25rem' }}
        >
          {buttonLabel}
        </Button>
      )}
    </Container>
  );
}
