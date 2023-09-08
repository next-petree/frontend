/**
 * @author 임유정
 * @description 강아지 모아보기 상세조회
 */

import { styled, css } from 'styled-components';
import { FC, useState } from 'react';
import BadgeSvg from 'assets/images/badge.svg';
import { E_Dog_Gender, dogGenderMap } from './constatns';
import { DogDetailProp } from '.';

interface Props {
  info: DogDetailProp | undefined;
}

const Detail: FC<Props> = ({ info }) => {
  const [selectedImgId, setSelectedImgId] = useState<number>(0);

  return (
    <Modal>
      <Top>
        <Left>
          {info?.imagesUrl && <BigImg src={info?.imagesUrl[selectedImgId]} alt="main_img" />}
          <SmallImages>
            {info?.imagesUrl?.map((img, i) => (
              <SmallImg key={i}>
                <img
                  src={img}
                  alt={`img${i}`}
                  onClick={() => setSelectedImgId(i)}
                  style={{ width: '100%', height: '100%' }}
                />
              </SmallImg>
            ))}
          </SmallImages>
        </Left>
        <Right>
          <Name>{info?.name}</Name>
          <RightDetail>
            <P>견종 : {info?.type}</P>
            <P>성별 : {info?.gender && dogGenderMap[E_Dog_Gender[info?.gender]]}</P>
            <P>출생일 : {info?.birthDate}</P>
            <P>브리더명 : {info?.breederNickName}</P>
            <P>
              {info?.isBreederVerified && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={BadgeSvg} alt="verifiedBadge" style={{ width: 20, height: 22 }} />
                  인증된 브리더
                </div>
              )}
            </P>
          </RightDetail>
          <Button>예약하기</Button>
        </Right>
      </Top>
      <Bottom>
        <h3 style={{ marginBottom: '2rem' }}>상세설명</h3>
        <P style={{ marginLeft: 20 }}>{info?.management}</P>
      </Bottom>
    </Modal>
  );
};

export default Detail;

const commonImgStyle = css`
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  top: 280px;
  display: flex;
  flex-flow: column;
  width: 880px;
  height: 799px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px #00000017;
  padding: 112px 83px;
  border-radius: 32px;
  color: #333;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
`;

const Top = styled.div`
  display: flex;
`;

const Left = styled.div`
  margin-right: 80px;
  width: 278px;
`;

const BigImg = styled.img`
  ${commonImgStyle}
  width: 100%;
  height: 278px;
  margin-bottom: 27px;
  border-radius: 16px;
`;

const SmallImages = styled.div`
  display: flex;
  align-items: center;
`;

const SmallImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 26px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.03em;
`;

const RightDetail = styled.div`
  padding: 24px 0;
  border-top: 1px solid#AEAEAE;
  border-bottom: 1px solid#AEAEAE;
  position: absolute;
  top: 50px;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 1rem;
  width: 120px;
  height: 52px;
  background: #35d8d5;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 16px;
  font-weight: 700;
`;
const Bottom = styled.div`
  margin-top: 37px;
`;
