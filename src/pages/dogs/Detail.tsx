/**
 * @author 임유정
 * @description 강아지 모아보기 상세조회
 */

import { styled, css } from 'styled-components';
import { FC, useState, useEffect, CSSProperties } from 'react';
import BadgeSvg from 'assets/images/badge.svg';
import { E_Dog_Gender, E_Dog_Status, dogGenderMap } from './constatns';
import { DogDetailProp } from '.';
import { Link } from 'react-router-dom';
import CloseBtnSvg from 'assets/CloseBtn.svg';

interface Props {
  info: DogDetailProp | undefined;
  onClose: () => void;
  style?: CSSProperties;
}

const DetailModal: FC<Props> = ({ info, onClose, style }) => {
  const [selectedImgId, setSelectedImgId] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
    return () => window.removeEventListener('keydown', () => onClose);
  }, [onClose]);

  return (
    <Modal style={style}>
      <CloseBtn src={CloseBtnSvg} alt="closeBtn" onClick={onClose} />
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
          <Button
            to={info?.status === E_Dog_Status.AVAILABLE ? `/reserve/${info?.id}` : ''}
            className={info?.status !== E_Dog_Status.AVAILABLE ? 'disabled' : ''}
          >
            예약하기
          </Button>
        </Right>
      </Top>
      <Bottom>
        <P style={{ marginBottom: '2rem', fontSize: 20 }}>상세설명</P>
        <h3 style={{ marginLeft: 20 }}>{info?.management}</h3>
      </Bottom>
    </Modal>
  );
};

export default DetailModal;

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

const Button = styled(Link)`
  border-radius: 1rem;
  width: 120px;
  height: 52px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.className === 'disabled' ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.className === 'disabled' ? 'grey' : '#4ec1bf')};
`;

const Bottom = styled.div`
  margin-top: 37px;
`;

const CloseBtn = styled.img`
  background: black;
  color: white;
  border-radius: 50%;
  position: absolute;
  top: -22px;
  right: -22px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`;
