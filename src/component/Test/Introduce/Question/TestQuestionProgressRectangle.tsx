import { Center } from "@component/0min/Center";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ProgressRectangleGroup = () => {
  return (
    <Center styles={{ gap: "4px" }}>
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
      <ProgressRectangleItem checked={false} />
    </Center>
  );
};

interface ProgressRectangleItemProps {
  checked: boolean;
}

const ProgressRectangleItem = ({ checked }: ProgressRectangleItemProps) => {
  return <S.ProgressRectangleItem checked={checked} />;
};

type ProgressRectangleItemStyledProps = Pick<
  ProgressRectangleItemProps,
  "checked"
>;
const S = {
  ProgressRectangleItem: styled.div<ProgressRectangleItemStyledProps>`
    height: 10px;
    border-radius: 8px;
    overflow: hidden;

    ${({ checked }) => css`
      width: ${checked ? `${30 * 2}px` : `${30}px`};
      background-color: ${checked ? "red" : "gray"};
    `}
  `,
};
