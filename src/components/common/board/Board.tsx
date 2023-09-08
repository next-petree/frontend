import { styled } from 'styled-components';
import DefaultImage from 'assets/images/logo_paw_white.svg';
import { useEffect, useState } from 'react';

const Container = styled.div<{ col: number; row: number }>`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
  grid-template-rows: repeat(${({ row }) => row}, 1fr);
  grid-gap: 3rem;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[] | React.ReactNode;
  col?: number;
  row?: number;
}

export default function Board({ children, col = 4, row = 2, ...props }: Props) {
  return (
    <Container col={col} row={row} {...props}>
      {children}
    </Container>
  );
}

const ImageComp = styled.img`
  width: 15rem;
  height: 9rem;
  object-fit: cover;
  border-radius: 0.75rem;
  background-color: #dfdfdf;
`;

const NoImage = styled.div`
  width: 15rem;
  height: 9rem;
  background-color: #dfdfdf;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  color: #fff;
`;

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

Board.Image = function Image({ alt, src, ...props }: ImageProps) {
  const [noImage, setNoImage] = useState(false);

  useEffect(() => {
    if (!src) {
      setNoImage(true);
    } else {
      setNoImage(false);
    }
  }, [src, noImage]);

  return noImage ? (
    <NoImage>
      <img src={DefaultImage} alt="noimage" />
      <span>프로필 이미지가 없습니다.</span>
    </NoImage>
  ) : (
    <ImageComp src={src} alt={alt} {...props} />
  );
};

const TitleComp = styled.h2`
  color: #333;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2.5rem; /* 160% */
`;

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Board.Title = ({ children, ...props }: TitleProps) => <TitleComp {...props}>{children}</TitleComp>;

const SubTitleComp = styled.h3`
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem; /* 168.75% */
`;

interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Board.SubTitle = ({ children, ...props }: SubTitleProps) => <SubTitleComp {...props}>{children}</SubTitleComp>;

const DescriptionComp = styled.p`
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6875rem; /* 168.75% */
`;

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

Board.Description = ({ children, ...props }: DescriptionProps) => (
  <DescriptionComp {...props}>{children}</DescriptionComp>
);
