import { ProgressItem } from "@component/SignUp/ProgressStep/ProgressStepItem";
import styled from "@emotion/styled";

export const ProgressGroup = () => {
  //TODO: 동적으로 렌더링

  return (
    <S.ProgressGroupContainer>
      <ProgressItem hasStepLine />
      <ProgressItem hasStepLine />
      <ProgressItem hasStepLine />
      <ProgressItem hasStepLine />
      <ProgressItem hasStepLine />
      <ProgressItem hasStepLine />
      <ProgressItem hasStepLine={false} />
    </S.ProgressGroupContainer>
  );
};

const S = {
  ProgressGroupContainer: styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: start;
    justify-content: center;

    margin: 96px auto 83px auto;
    gap: 50px;
  `,
};
