/**
 * 이메일의 경우에만 다르게 해주면 된다.
 */

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const EnterInformationFormItemContainer = ({
  children,
}: PropsWithChildren) => {
  return <div>{children}</div>;
};

const EnterInformationFormItemRow = ({ children }: PropsWithChildren) => {
  return <S.Row>{children}</S.Row>;
};
const EnterInformationFormItemColumn = ({ children }: PropsWithChildren) => {
  return <S.Column>{children}</S.Column>;
};

interface EnterInformationFormItemTitleProps extends PropsWithChildren {
  required: boolean;
}

const EnterInformationFormItemTitle = ({
  children,
  required,
}: EnterInformationFormItemTitleProps) => {
  return (
    <S.Margin>
      <Typography component={"span"}>
        {children}
        {required && (
          <Typography component={"i"} fontSize={"20px"}>
            *
          </Typography>
        )}
      </Typography>
    </S.Margin>
  );
};

interface EnterInformationFormItemInputProps extends PropsWithChildren {
  guideMessage?: string;
  placeholder?: string;
}
const EnterInformationFormItemInput = ({
  children,
  guideMessage,
  placeholder,
}: EnterInformationFormItemInputProps) => {
  return (
    <S.Relative>
      <S.Input type="text" placeholder={placeholder}>
        {children}
      </S.Input>
      <S.Absolute>
        <Typography>{guideMessage}</Typography>
      </S.Absolute>
    </S.Relative>
  );
};

const EnterInformationFormItemTrigger = ({ children }: PropsWithChildren) => {
  return (
    <Button variant="contained" sx={{ width: "120px", height: "48px" }}>
      {children}
    </Button>
  );
};

export const EnterInformationFormItem = Object.assign(
  EnterInformationFormItemContainer,
  {
    Row: EnterInformationFormItemRow,
    Column: EnterInformationFormItemColumn,
    Title: EnterInformationFormItemTitle,
    Input: EnterInformationFormItemInput,
    Trigger: EnterInformationFormItemTrigger,
  },
);

const S = {
  Input: styled.input`
    box-sizing: border-box;
    min-height: 48px;
    min-width: 260px;
    padding: 12px 22px;

    width: 100%;

    border: none;
    background-color: #f5f5f5;
    font-size: large;
  `,

  Row: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 396px;
  `,

  Relative: styled.div`
    box-sizing: border-box;
    position: relative;
  `,

  Absolute: styled.div`
    box-sizing: border-box;
    position: absolute;
    top: calc(-1.2rem - 12px);
    right: 0;
  `,
  Margin: styled.div`
    margin-bottom: 12px;
  `,
};
