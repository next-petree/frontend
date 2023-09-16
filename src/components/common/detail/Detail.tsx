import { IBreederDetail, IUserDetail, User } from 'assets/types/User';
import axios from 'axios';
import Banner from 'components/common/banner/Banner';
import ProfilePic from 'components/common/profile-pic/ProfilePic';
import { useConsolelog } from 'hooks/useConsolelog';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import DetailModal from '../../../pages/dogs/Detail';
import { API_PATHS } from '../../../constants';
import { E_Dog_Status, dogStatusMap } from '../../../pages/dogs/constatns';

const Container = styled.div`
  margin: 15rem auto 3.5rem auto;
  width: 1060px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 1rem;
`;

const Nickname = styled.h4`
  margin-top: 5rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Address = styled.span`
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem; /* 128.571% */
  margin-top: 3.5rem;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1.5rem;
  span {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 9999px;
    padding: 0.69rem 1.88rem;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.03375rem;
  }
`;

const Introduction = styled.p`
  color: #333;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0375rem;
  margin-top: 1.5rem;
`;

const MajorBreedCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.25rem;
  margin: 1.25rem auto 4rem auto;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 9rem;
      height: 9rem;
      border-radius: 2.5rem;
      object-fit: cover;
    }
    span {
      margin-top: 1.5rem;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.6875rem; /* 135% */
    }
  }
`;

const BreederEnvCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.25rem;
  padding: 0 2.25rem;
  margin: 2.25rem auto;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      aspect-ratio: 1.6666666667;
      border-radius: 0.75rem;
      object-fit: cover;
    }
    span {
      color: #333;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.6875rem; /* 135% */
      margin-top: 1.75rem;
    }
  }
`;

const HasDogsContainer = styled.div`
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.25rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 15rem;
      height: 9rem;
      border-radius: 0.75rem;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      > div {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
      }
    }
  }
`;

interface Props extends User {
  envResponseDtos?: IUserDetail['envResponseDtos'];
  mainBreedDtoResponseList?: IBreederDetail['mainBreedDtoResponseList'];
  simpleDogDtos?: IBreederDetail['simpleDogDtos'];
}

export default function Detail(props: Props) {
  useConsolelog('Detail', props);
  const [modalInfo, setModalInfo] = useState<any>();

  useEffect(() => {
    return () => closeDetailModal();
  }, []);

  const openDetailModal = async (id: number) => {
    try {
      const {
        data: { data },
      } = await axios.get(API_PATHS.myDogDetail(id));
      setModalInfo(data);
      document.body.style.overflow = 'hidden';
    } catch (err) {
      console.error(err);
    }
  };

  const closeDetailModal = () => {
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <Banner />
      <Container>
        <div
          style={{
            position: 'absolute',
            top: '-3.5rem',
          }}
        >
          <ProfilePic
            src={props.profileImgUrl ?? ''}
            verified={props.verified}
            style={{
              width: '7rem',
              height: '7rem',
            }}
          />
        </div>
        <Nickname>{props.nickname}</Nickname>
        {props.mainBreedDtoResponseList && (
          <Address>활동 지역: {props.address1.split(' ').slice(0, 3).join(' ')}</Address>
        )}
        <Title>자기소개</Title>
        <Tags>
          <span>#강아지에 진심</span>
          <span>#반려견 기초지식 테스트 통과자</span>
          <span>#반려견의 나의 가족</span>
        </Tags>
        <Introduction>{props.selfIntroduction}</Introduction>
        {props.mainBreedDtoResponseList && (
          <>
            <Title>주력 견종</Title>
            <MajorBreedCards>
              {props.mainBreedDtoResponseList?.map((v) => (
                <div key={v.id}>
                  <img src={v.imgUrl} alt={v.name} />
                  <span>{v.name}</span>
                </div>
              ))}
            </MajorBreedCards>
          </>
        )}
        {props.envResponseDtos && (
          <>
            <Title>주거환경</Title>
            <BreederEnvCards>
              {props.envResponseDtos?.map((v) => (
                <div key={v.id}>
                  <img src={v.imgUrl} alt={v.spaceType} />
                  <span>
                    {v.spaceType === 'LIVING_ROOM'
                      ? '거실'
                      : v.spaceType === 'BATH_ROOM'
                      ? '회장실'
                      : v.spaceType === 'YARD'
                      ? '마당'
                      : 'NULL'}
                  </span>
                </div>
              ))}
            </BreederEnvCards>
          </>
        )}
      </Container>
      {props.simpleDogDtos && (
        <Container
          style={{
            marginTop: '3rem',
          }}
        >
          <Title>보유 견종</Title>
          <HasDogsContainer>
            {props.simpleDogDtos?.map((v) => (
              <Info key={v.id}>
                <ImageContainer>
                  <img src={v.imgUrl ?? ''} alt={v.name} />
                  {v.status !== E_Dog_Status.AVAILABLE && <Mask>{dogStatusMap[v.status]}</Mask>}
                </ImageContainer>
                <div>
                  <div>
                    <Span>견종 :</Span>
                    <Span>{v.type}</Span>
                  </div>
                  <div>
                    <Span>이름 :</Span>
                    <Span>{v.name}</Span>
                  </div>
                  <div>
                    <Span>출생일 :</Span>
                    <Span>{v.birthDate}</Span>
                  </div>
                </div>
                <Button
                  className={v.status !== E_Dog_Status.AVAILABLE ? 'disabled' : ''}
                  onClick={() => v.status === E_Dog_Status.AVAILABLE && openDetailModal(v.id)}
                >
                  상세보기
                </Button>
              </Info>
            ))}
          </HasDogsContainer>
        </Container>
      )}
      <ModalMask
        style={{ top: window.scrollY, display: `${modalInfo ? 'block' : 'none'}` }}
        onClick={() => {
          setModalInfo(undefined);
          closeDetailModal();
        }}
      />
      {modalInfo && (
        <DetailModal
          style={{ top: window.scrollY, left: '50%', transform: 'translate(-50%, 20%)' }}
          info={modalInfo}
          onClose={() => {
            setModalInfo(null);
            closeDetailModal();
          }}
        />
      )}
    </>
  );
}

const Info = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end !important;
`;

const Button = styled.button`
  width: 120px;
  height: 52px;
  color: ${({ theme }) => theme.colors.white};
  cursor: ${(props) => (props.className === 'disabled' ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.className === 'disabled' ? 'grey' : '#4ec1bf')};
  border-radius: 16px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  margin-top: 24px;
`;

const Span = styled.span`
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 240px;
  heigt: 144px;
  border-radius: 12px;
  overflow: hidden;
`;
const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  background: #0000004d;
  align-items: center;
  justify-content: center !important;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.05em;
`;

const ModalMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #5a5a5a40;
`;
