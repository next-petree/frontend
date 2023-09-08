import { styled } from 'styled-components';

const Container = styled.div`
  @keyframes skeleton {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  background: linear-gradient(90deg, #f0f0f0, #dfdfdf, #f0f0f0);
  background-size: 400% 400%;
  animation: skeleton 1.2s ease-in-out infinite;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Skeleton(props: Props) {
  return <Container {...props} />;
}
