import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { CSSProperties } from "react";

type ColumnStyleProps = {
  styles?: {
    gap: CSSProperties["gap"];
    horizontalAlign?: CSSProperties["alignItems"];
    verticalAlign?: CSSProperties["justifyContent"];
  };
};

export const Column = styled.div<ColumnStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ styles }) =>
    styles &&
    css`
      gap: ${styles.gap};
      align-items: ${styles.horizontalAlign && styles.horizontalAlign};
      justify-content: ${styles.verticalAlign && styles.verticalAlign};
    `}
`;
