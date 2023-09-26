import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { Image } from "@component/0min/Image";
import styled from "@emotion/styled";

const TestIntroduceContentContainer = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

interface TestIntroduceContentImageProps {
  src: string;
  alt: string;
}

const TestIntroduceContentImage = ({
  src,
  alt,
}: TestIntroduceContentImageProps) => {
  return (
    <S.BoxShadow>
      <Image src={src} alt={alt} width={180} height={180} />
    </S.BoxShadow>
  );
};

const TestIntroduceContentPrimary = ({ children }: PropsWithChildren) => {
  return (
    <Typography component={"h4"} fontSize={"32px"} fontWeight={500}>
      {children}
    </Typography>
  );
};

const TestIntroduceContentSecondary = ({ children }: PropsWithChildren) => {
  return <Typography fontSize={"24px"}>{children}</Typography>;
};

export const TestIntroduceContent = Object.assign(
  TestIntroduceContentContainer,
  {
    Image: TestIntroduceContentImage,
    Primary: TestIntroduceContentPrimary,
    Secondary: TestIntroduceContentSecondary,
  },
);

const S = {
  Container: styled.div`
    padding: 20px;
    border-radius: 24px;
    overflow: hidden;
    max-width: 1320px;

    box-shadow: 0px 14px 20px 0px rgba(58, 58, 58, 0.08);
  `,
  BoxShadow: styled.div`
    border-radius: 15px;
    border: 1px solid green;
    overflow: hidden;
    width: fit-content;
    box-sizing: content-box;
    min-width: 180px;
    min-height: 180px;

    box-shadow: 0px 14px 20px 0px rgba(58, 58, 58, 0.08);
  `,
};
