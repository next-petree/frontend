import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import { Image, PartialImageProps } from "@component/0min/Image";
import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { Typography } from "@mui/material";

const ModalContainer = ({ children }: PropsWithChildren) => {
  return <S.Grid>{children}</S.Grid>;
};

const ModalImageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Column styles={{ verticalAlign: "start", gap: "27px" }}>{children}</Column>
  );
};
const ModalMainImage = ({
  src,
  alt,
  width = 278,
  height = 278,
}: PartialImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

const ModalSubImage = ({
  src,
  alt,
  width = 50,
  height = 50,
}: PartialImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

const ModalImageTrack = ({ children }: PropsWithChildren) => {
  return <Center styles={{ gap: "26px" }}>{children}</Center>;
};

const ModalContentTitle = ({ children }: PropsWithChildren) => {
  return <Typography component="h3">{children}</Typography>;
};
const ModalContentSubTitle = ({ children }: PropsWithChildren) => {
  return <Typography component="h4">{children}</Typography>;
};

const S = {
  ModalContainer: styled.div``,
  Grid: styled.div`
    display: grid;

    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    /* grid-template-rows: 1.1fr 1fr; */
    box-sizing: border-box;
    max-width: 880px;
    padding: 88px;

    border-radius: 32px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
  `,
  Line: styled.div`
    box-sizing: border-box;
    background-color: red;
    height: 1px;
    width: 100%;
  `,
  Content: styled.div`
    padding: 20px 0px 20px 0px;
    text-align: left;
  `,
  DetailContent: styled.div`
    padding: 20px;
    text-align: left;
    grid-column: span 2;
  `,
  Information: styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
  `,
  Wrap: styled.div`
    width: 100%;
  `,
};

export const Modal = Object.assign(ModalContainer, {
  ImageTrack: ModalImageTrack,
  ImageContainer: ModalImageContainer,
  MainImage: ModalMainImage,
  SubImage: ModalSubImage,
  ContentTitle: ModalContentTitle,
  ContentSubTitle: ModalContentSubTitle,
  Line: S.Line,
  DetailContent: S.DetailContent,
  Information: S.Information,
  Wrap: S.Wrap,
});
