import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

type CenterStyleProps = {
  styles?: {
    gap: CSSProperties["gap"];
    horizontalAlign?: CSSProperties["alignItems"];
    verticalAlign?: CSSProperties["justifyContent"];
  };
};

export const Center = styled.div<CenterStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ styles }) =>
    styles &&
    css`
      gap: ${styles.gap};
      align-items: ${styles.verticalAlign && styles.verticalAlign};
      justify-content: ${styles.horizontalAlign && styles.horizontalAlign};
    `}
`;
