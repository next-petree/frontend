import { ChangeEvent, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IInputTextarea {
  label: string;
  value?: string;
  count?: number;
  onChange?: (v: any) => any;
}

export default function InputTextarea({
  label,
  value,
  count,
  onChange,
  ...props
}: IInputTextarea & HTMLAttributes<HTMLTextAreaElement>) {
  const onInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(e);
  };

  return (
    <Container>
      <Wrap>
        {label && (
          <LabelBox>
            <Label>{label}</Label>
          </LabelBox>
        )}
        <Textarea maxLength={300} value={value} onChange={onInputHandler} {...props} />
        <Span>{count}/300</Span>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
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

const Textarea = styled.textarea`
  width: 100%;
  height: 11.813rem;
  padding: 1.5rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  border: none;
  border-radius: 1rem;
  background-color: #f5f5f5 !important;
  color: #000000;
  resize: none;

  &:focus {
    box-shadow: none;
    outline: none;
    background-color: #f5f5f5;
  }
`;

const Span = styled.span`
  position: absolute;
  right: 0;
  margin-right: 4rem;
  margin-top: 13rem;
`;
