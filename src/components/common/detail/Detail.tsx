import { IBreederDetail, IUserDetail, User } from 'assets/types/User';
import Banner from 'components/common/banner/Banner';
import ProfilePic from 'components/common/profile-pic/ProfilePic';
import { useConsolelog } from 'hooks/useConsolelog';
import { styled } from 'styled-components';

const Container = styled.div`
  margin: 15rem auto 3.5rem auto;
  width: 50rem;
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
  possessionDogDtos?: IBreederDetail['possessionDogDtos'];
}

export default function Detail(props: Props) {
  useConsolelog('Detail', props);
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
      {props.possessionDogDtos && (
        <Container
          style={{
            marginTop: '3rem',
          }}
        >
          <Title>보유 견종</Title>
          <HasDogsContainer>
            {props.possessionDogDtos?.map((v) => (
              <div key={v.id}>
                <img src={v.dogImgUrl ?? ''} alt={v.name} />
                <div>
                  <div>
                    <span>이름:</span>
                    <span>{v.name}</span>
                  </div>
                  <div>
                    <span>출생일:</span>
                    <span>{new Date(v.birthDate).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span>성별:</span>
                    <span>{v.gender === 'MALE' ? '수' : '암'}컷</span>
                  </div>
                </div>
              </div>
            ))}
          </HasDogsContainer>
        </Container>
      )}
    </>
  );
}
