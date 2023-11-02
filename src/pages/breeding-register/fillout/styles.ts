import styled, { css } from 'styled-components';

export const InnerContainer = styled.div`
  // width, height => not fixed
  width: 968px;
  height: 658px;
  position: absolute;
  top: 370px;
  left: 476px;
  gap: 43px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
`;

export const TitleContainer = styled.div`
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  color: #000000;
`;

export const FormContainer = styled.form`
  // width, height => not fixed
  width: 968px;
  height: 484px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const FormBox = styled.div`
  width: 968px;
  //height => not fixed
  height: 230px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormBoxQuestion = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
`;

export const FormBoxTextareaContainer = styled.div<{ top: number }>`
  width: 968px;
  height: 189px;
  position: absolute;
  top: ${(props) => props.top}px;
`;

export const FormBoxTextarea = styled.textarea`
  background: #f5f5f5;
  border-radius: 16px;
  height: 189px;
  padding: 20px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #939393;
  border: none;
  isolation: isolate;
  resize: none;
  z-index: 1;
`;

export const TextLength = styled.span`
  position: absolute;
  width: 50px;
  height: 23px;
  right: 22px;
  bottom: 19px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.03em;

  color: #000000;
  z-index: 2;
`;

export const ButtonGroup = styled.div`
  width: 500px;
  height: 52px;
  display: flex;
  gap: 20px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  width: 240px;
  height: 52px;
  border-radius: 16px;
  gap: 10px;
  background: #2f2f2f;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      background: #4ec1bf;
    `}

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;
`;
