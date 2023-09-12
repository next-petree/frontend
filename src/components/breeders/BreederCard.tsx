import Board from 'components/common/board/Board';
import { PATHS } from '../../constants';
import { IBreeder } from 'pages/mypage/breeders';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function BreederCard({ profileImagUrl, nickname, distance, types, id, verified }: IBreeder) {
  return (
    <Container to={`${PATHS.breeders.root}/${id}`}>
      <Board.Image src={profileImagUrl} alt={nickname} verified={verified} />
      <TitleContainer>
        <Board.Title
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {nickname}
        </Board.Title>
        <Board.SubTitle>({distance}km)</Board.SubTitle>
      </TitleContainer>
      <Board.Description
        style={{
          width: '100%',
        }}
      >
        주력 견종 : {types.join(', ')}
      </Board.Description>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 303px;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
  padding: 20px 20px 40px 20px;
  color: #333333;
  font-family: Noto Sans KR;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
`;
