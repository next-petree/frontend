import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
import React, { ChangeEvent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IInputButton {
  row?: boolean;
  label?: string;
  type?: string;
  value?: string;
  minLength?: number;
  maxLength?: number;
  essential?: boolean;
  error?: boolean;
  errorMsg?: string;
  successMsg?: string;
  describe?: string;
  onChange?: (v: any) => any;
  buttonLabel?: string;
  buttonColor?: ButtonColor;
  onClick?: (v: any) => any;
}

export default function InputButton({
  row = false,
  label,
  type,
  value,
  minLength,
  maxLength,
  essential = false,
  error,
  errorMsg,
  successMsg,
  describe,
  onChange,
  buttonLabel,
  buttonColor,
  onClick,
  ...props
}: IInputButton & HTMLAttributes<HTMLInputElement>) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <Container>
      <ContainerWrap>
        <Wrap style={{ flexDirection: row ? 'row' : 'column' }}>
          {label && (
            <LabelBox style={{ width: row ? '25rem' : '' }}>
              <Label>{label}</Label>
              {essential && <EssentialLabel>*</EssentialLabel>}
              <Gap />
              <DescribeSpan>{describe}</DescribeSpan>
            </LabelBox>
          )}

          <Input
            type={type}
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            onChange={changeHandler}
            {...props}
          />
        </Wrap>
        {buttonLabel && (
          <Button
            buttonSize={ButtonSize.SMALL}
            buttonColor={buttonColor}
            onClick={onClick}
            style={{ marginLeft: '1rem' }}
          >
            {buttonLabel}
          </Button>
        )}
      </ContainerWrap>
      {!error && <ErrorMessage>{errorMsg}</ErrorMessage>}
      {error && <ErrorMessage style={{ color: 'green' }}>{successMsg}</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 0.3rem;
`;

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const LabelBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Label = styled.label`
  font-size: 1.25rem;
  color: #000000;
  width: 600;
`;

const EssentialLabel = styled.p`
  font-size: 1.25rem;
  color: #ff5757;
  width: 600;
`;

const DescribeSpan = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  color: #000000;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
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

const Gap = styled.div`
  flex: 1;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
  margin-left: 0.5rem;
`;
