/**
 * @author 임유정
 * @description 강아지 모아보기 카드
 */

import { IDog } from '.';
import { styled } from 'styled-components';
import BadgeSvg from 'assets/images/badge.svg';
import { E_Dog_Status, dogGenderMap, dogStatusMap } from './constatns';

interface Props extends IDog {
  onClick: (id: number) => void;
}

const DogCard = ({
  id,
  name,
  type,
  gender,
  birthDate,
  imgUrl,
  breederNickName,
  isBreederVerified,
  status,
  onClick,
}: Props) => {
  return (
    <Card
      onClick={() => status === E_Dog_Status.AVAILABLE && onClick(id)}
      className={`${status !== E_Dog_Status.AVAILABLE ? 'disabled' : ''}`}
    >
      <ImageContainer>
        <Image src={imgUrl} alt="img" />
        {status !== E_Dog_Status.AVAILABLE && <Mask>{dogStatusMap[status]}</Mask>}
      </ImageContainer>
      <Info>
        <Name>{name}</Name>
        <Details>
          <p>견종 : {type}</p>
          <p>성별 : {dogGenderMap[gender]}</p>
          <p>출생일 : {birthDate}</p>
        </Details>

        <BreederInfo>
          {isBreederVerified && (
            <img src={BadgeSvg} style={{ width: 24, height: 24, marginRight: 3 }} alt="verifyLogo" />
          )}
          {breederNickName}님의 보유견종
        </BreederInfo>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 390px;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px #00000017;
  padding: 20px 20px 30px 20px;
  color: ${({ theme }) => theme.colors.black333};
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  cursor: ${(props) => (props.className === 'disabled' ? 'not-allowed' : 'pointer')};
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000004d;
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
`;

const Details = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
`;

const BreederInfo = styled.div`
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default DogCard;
