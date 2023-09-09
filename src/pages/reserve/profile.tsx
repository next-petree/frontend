import { useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import Checkbox, { Size } from 'components/common/checkbox/Checkbox';
import THUMB from 'assets/images/reserve/dog_profile.jpg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IBreederDogDetail } from 'assets/types/User';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 1248px;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;
// justify-content - 주축
// align-items - 교차축
const ProfileImg = styled.img`
  display: flex-item;
  width: 251px;
  height: 251px;
  margin-right: 80px;
`;
const ProfileDesc = styled.div`
  display: flex-item;
  width: 343px;
  height: 251px;
`;
const ProfileTitle = styled.h3``;
const ProfileUl = styled.ul`
  display: block;
  width: 343px;
  padding: 27px 0px;
  border: 1px 0px 1px 0px solid #aeaeae;
`;
const ProfileLi = styled.li`
  display: block;
  width: 343px;
  height: 27px;
`;
const Mark = styled.span<{ $level: boolean }>`
  display: block;
  width: 343px;
  height: 27px;
  background-img: url(${(props) => {
    if (props.$level) {
      return '';
    }
    return '';
  }});
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  button {
    margin-left: 20px;
  }
  button:button {
    margin-left: 0px;
  }
`;

const DetailTitle = styled.h3``;
const DetailContent = styled.p``;
export default function ProfileContainer(props: { nextStep: () => void; dogProfile: IBreederDogDetail }) {
  const [isAgreement, setAggrement] = useState(false);
  const navigate = useNavigate();
  const { dogProfile } = props;
  if (!dogProfile) return '';
  return (
    <ProfileBox>
      <Profile>
        <ProfileImg src={dogProfile.dogImgUrl[0]} alt={dogProfile.type} />
        <ProfileDesc>
          <ProfileTitle>{dogProfile.name}</ProfileTitle>
          <ProfileUl>
            <ProfileLi>견종: {dogProfile.type}</ProfileLi>
            <ProfileLi>성별: {dogProfile.gender == 'MALE' ? 'M' : 'F'}</ProfileLi>
            <ProfileLi>출생일: {dogProfile.birthDate}</ProfileLi>
            <ProfileLi>브리더명: {dogProfile.name}</ProfileLi>
            <ProfileLi>
              <Mark $level={dogProfile.isBreederVerified}>
                {dogProfile.isBreederVerified ? '인증된 브리더' : '미인증 브리더'}
              </Mark>
            </ProfileLi>
          </ProfileUl>
        </ProfileDesc>
      </Profile>
      <Detail>
        <DetailTitle>상세설명</DetailTitle>
        <DetailContent>{dogProfile.management}</DetailContent>
      </Detail>
      <div>
        <Checkbox
          size={Size.LARGE}
          value={isAgreement}
          label={'동의합니다'}
          onChange={(event: any) => {
            if (event?.target) setAggrement(event.target.checked);
          }}
        />
        <p>
          본인은 분양신청서를 작성함에 있어 브리더가 해당 서류를 열람하도록 동의합니다.
          <br />
          또한, 법적 문제 발생 시 사전 통보 없이 관련 서류를 경찰 또는 법 집행 당국에 제출할 수 있음을 인지하고
          동의합니다.
        </p>
      </div>
      <ButtonWrap>
        <Button
          buttonSize={ButtonSize.MEDIUM}
          buttonColor={isAgreement ? ButtonColor.MINT : ButtonColor.GRAY}
          onClick={props.nextStep}
        >
          저장
        </Button>
        <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.BLACK} onClick={() => navigate('/dogs')}>
          취소
        </Button>
      </ButtonWrap>
    </ProfileBox>
  );
}
