import Board from 'components/common/board/Board';
import { PATHS } from '../../constants';
import { IBreeder } from 'pages/breeders';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as Badge } from 'assets/images/badge.svg';

const Container = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 15rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

export default function BreederCard({ profileImagUrl, nickname, distance, types, id, verified }: IBreeder) {
  return (
    <Container to={`${PATHS.breeders.root}/${id}`}>
      <Board.Image src={profileImagUrl} alt={nickname} />
      <TitleContainer>
        <Board.Title
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {verified && (
            <Badge
              style={{
                width: '1.5rem',
                height: '1.5rem',
              }}
            />
          )}
          {nickname}
        </Board.Title>
        <Board.SubTitle>({distance}km)</Board.SubTitle>
      </TitleContainer>
      <Board.Description
        style={{
          width: '100%',
        }}
      >
        주력 견종: {types.join(', ')}
      </Board.Description>
    </Container>
  );
}
