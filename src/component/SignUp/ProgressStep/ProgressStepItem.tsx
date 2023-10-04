import { Column } from "@component/0min/Column";
import { ProgressLine } from "@component/SignUp/ProgressStep/ProgressStepLine";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface ProgressImteProps extends PropsWithChildren {
  hasStepLine: boolean;
}

export const ProgressItem = ({ children, hasStepLine }: ProgressImteProps) => {
  return (
    <S.ProgressItemContainer styles={{ gap: "9px" }}>
      <ProgressLine isShow={hasStepLine}>
        <S.ProgressItemOut>
          <S.ProgressItemIn>
            <Typography color="white">{children}</Typography>
          </S.ProgressItemIn>
        </S.ProgressItemOut>
      </ProgressLine>
      <Typography fontSize="14px">약관동의</Typography>
    </S.ProgressItemContainer>
  );
};

const S = {
  ProgressItemContainer: styled(Column)`
    width: initial;
  `,
  ProgressItemOut: styled.div`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    padding: 6px;

    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
  `,
  ProgressItemIn: styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    border-radius: 50%;
    background-color: black;
  `,
};
