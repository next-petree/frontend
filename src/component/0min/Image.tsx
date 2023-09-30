import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  lazy?: boolean;
}

export type PartialImageProps = Omit<ImageProps, "width" | "height"> & {
  width?: number;
  height?: number;
};

export const Image = ({ src, alt, width, height, lazy = true }: ImageProps) => {
  return (
    <S.Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
    />
  );
};

type ImageStyleProps = Pick<ImageProps, "width" | "height">;
const S = {
  Image: styled.img<ImageStyleProps>`
    ${({ width, height }) => css`
      width: ${width}px;
      height: ${height}px;
    `}
  `,
};
