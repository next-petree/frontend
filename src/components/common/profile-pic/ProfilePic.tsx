import { HTMLAttributes, ImgHTMLAttributes, SyntheticEvent, useState } from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { CONSTANTS } from '../../../constants';
import ProfileSvg from 'assets/images/profile_small.svg';
import { styled } from 'styled-components';
import Badge from '../badge/Badge';

const Container = styled.div`
  position: relative;
`;

const Image = styled.img<{ $verified: boolean }>`
  cursor: pointer;
  width: ${(props) => props.style?.width ?? '2rem'};
  height: ${(props) => props.style?.height ?? '2rem'};
  border-radius: 50%;
  border: ${({ $verified }) => ($verified ? `0.2rem solid #23F39C` : 'none')};
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  verified?: boolean;
  mine?: boolean;
  src?: ImgHTMLAttributes<HTMLImageElement>['src'];
}

export default function ProfilePic({ verified, mine, ...props }: Props) {
  const [url, setUrl] = useState('');

  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = ProfileSvg;
  };

  useEffectOnce(() => {
    setUrl(mine ? localStorage.getItem(CONSTANTS.PROFILE_IMAGE_URL) ?? '' : props.src ?? '');
  });

  return (
    <Container>
      <Image
        src={url}
        onError={handleError}
        alt="프로필"
        $verified={verified !== undefined ? verified : false}
        {...props}
      />
      {verified && <Badge />}
    </Container>
  );
}

ProfilePic.defaultProps = {
  verified: false,
  mine: true,
};
