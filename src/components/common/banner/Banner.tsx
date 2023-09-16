import { styled } from 'styled-components';
import banner from 'assets/images/mypage/subbanner/sub_banner_background.png';

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 24rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${banner});
  z-index: -1;
`;

export default function Banner() {
  return <Container />;
}
