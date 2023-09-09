import { styled } from 'styled-components';

interface Props {
  className?: string;
  imgUrl: string;
  imgAlt: string;
  avifUrl?: string;
  webpUrl?: string;
}

const PictureEl = styled.picture`
  img {
    width: 100%;
    height: auto;
  }
`;

const Picture = ({ className, imgUrl, imgAlt, avifUrl, webpUrl }: Props) => {
  return (
    <PictureEl className={className}>
      {avifUrl && <source srcSet={avifUrl} type="image/avif" />}
      {webpUrl && <source srcSet={webpUrl} type="image/webp" />}
      <img src={imgUrl} alt={imgAlt} />
    </PictureEl>
  );
};

export default Picture;
