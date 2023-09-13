import { useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import Checkbox, { Size } from 'components/common/checkbox/Checkbox';
import MARK_SVG from 'assets/images/reserve/level_mark.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IBreederDogDetail } from '.';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 1248px;
  .wrap {
    display: flex;
    flex-direction: row;
  }
  .agreement {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 57px auto;
    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
      letter-spacing: -0.48px;
    }
  }
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 674px;
  margin-right: 44px;
`;
// flex-direction - 주축 방향
// justify-content - 주축
// align-items - 교차축
const ProfileImg = styled.img`
  display: flex-item;
  width: 251px;
  height: 251px;
  margin-right: 80px;
  border-radius: 10px;
`;
const ProfileDesc = styled.div`
  display: flex-item;
  width: 343px;
  height: 251px;
`;
const ProfileTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 10px;
`;
const ProfileUl = styled.ul`
  display: block;
  width: 343px;
  padding: 27px 0px;
  border: 1px solid #aeaeae;
  border-left-width: 0px;
  border-right-width: 0px;
`;
const ProfileLi = styled.li`
  display: block;
  width: 343px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
const Mark = styled.span<{ $level: boolean }>`
  display: block;
  width: 343px;
  height: 27px;
  background: url(${MARK_SVG}) no-repeat left center;
  padding-left: 30px;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 520px;
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    margin-left: 20px;
  }
  button:button {
    margin-left: 0px;
  }
`;

const DetailTitle = styled.h3`
  letter-spacing: 0.6px;
  font-size: 20px;
  height: 35px;
`;
const DetailContent = styled.p`
  display: flex;
  width: 520px;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 22px;
  border-radius: 16px;
  background: #f5f5f5;
  min-height: 96px;
`;

export default function ProfileContainer(props: { nextStep: () => void; dogProfile: IBreederDogDetail }) {
  const [isAgreement, setAggrement] = useState(false);
  const navigate = useNavigate();
  const { dogProfile } = props;
  if (!dogProfile) return '';
  return (
    <ProfileBox>
      <div className="wrap">
        <Profile>
          <ProfileImg src={dogProfile.imagesUrl[0]} alt={dogProfile.type} />
          <ProfileDesc>
            <ProfileTitle>{dogProfile.name}</ProfileTitle>
            <ProfileUl>
              <ProfileLi>견종 : &nbsp;{dogProfile.type}</ProfileLi>
              <ProfileLi>성별 : &nbsp;{dogProfile.gender == 'MALE' ? 'M' : 'F'}</ProfileLi>
              <ProfileLi>출생일 : &nbsp;{dogProfile.birthDate}</ProfileLi>
              <ProfileLi>브리더명 : &nbsp;{dogProfile.name}</ProfileLi>
              <ProfileLi>
                {dogProfile.isBreederVerified != false ? <Mark $level={true}>인증된 브리더</Mark> : ''}
              </ProfileLi>
            </ProfileUl>
          </ProfileDesc>
        </Profile>
        <Detail>
          <DetailTitle>상세설명</DetailTitle>
          <DetailContent>{dogProfile.management}</DetailContent>
        </Detail>
      </div>
      <div className="agreement">
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
          onClick={() => (isAgreement ? props.nextStep() : '')}
        >
          다음
        </Button>
        <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.BLACK} onClick={() => navigate('/dogs')}>
          취소
        </Button>
      </ButtonWrap>
    </ProfileBox>
  );
}
