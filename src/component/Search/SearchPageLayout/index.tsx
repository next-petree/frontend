import { Center } from "@component/0min/Center";
import styled from "@emotion/styled";
import { Pagination, Typography } from "@mui/material";

import type { PropsWithChildren, CSSProperties } from "react";

const SearchPageLayoutContainer = ({ children }: PropsWithChildren) => {
  return <main>{children}</main>;
};

const SearchPageLayoutSection = ({ children }: PropsWithChildren) => {
  return <S.Section>{children}</S.Section>;
};

interface ProntWithPaddingWithChildren extends PropsWithChildren {
  styles?: {
    padding?: CSSProperties["padding"];
  };
}
const SearchPageLayoutHeader = ({
  children,
  styles,
}: ProntWithPaddingWithChildren) => {
  return <S.Header styles={styles}>{children}</S.Header>;
};

const SearchPageLayoutFooter = ({
  children,
  styles,
}: ProntWithPaddingWithChildren) => {
  return <S.Footer styles={styles}>{children}</S.Footer>;
};

const SearchPageLayoutTitle = ({ children }: PropsWithChildren) => {
  // TODO: FontSize, Color 수정
  return (
    <Typography component="h1" fontSize={"35px"}>
      {children}
    </Typography>
  );
};

const SearchPageLayoutPagination = () => {
  return (
    <Center>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Center>
  );
};

export const SearchPageLayout = Object.assign(SearchPageLayoutContainer, {
  Header: SearchPageLayoutHeader,
  Section: SearchPageLayoutSection,
  Footer: SearchPageLayoutFooter,
  Title: SearchPageLayoutTitle,
  Pagination: SearchPageLayoutPagination,
});

type StyleProps = Pick<ProntWithPaddingWithChildren, "styles">;

const S = {
  Section: styled.section`
    box-sizing: border-box;
    text-align: center;

    width: 1420px;
    max-width: 90vw;
    margin: 0px auto 50px auto;
    padding: 111px 78px 86px 78px;
    border-radius: 32px;

    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
  `,
  Header: styled.header<StyleProps>`
    padding: ${({ styles }) => styles?.padding && styles.padding};
  `,
  Footer: styled.footer<StyleProps>`
    padding: ${({ styles }) => styles?.padding && styles.padding};
  `,
  Content: styled.div``,
};
