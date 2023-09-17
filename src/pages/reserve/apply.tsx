import { useEffect, useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_PATHS, CONSTANTS } from '../../constants';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: -14px;
`;

const DemantionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margin-bottom: 12px;
  }
  textarea {
    width: 968px;
    height: 189px;
    flex-shrink: 0;
    background: #f5f5f5;
    resize: none;
    border: 0px;
    border-radius: 10px;
    padding: 22px 19px;
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    font-family: 'Noto Sans KR', sans-serif;
    &::placeholder {
      color: #939393;
    }
  }
  .areabox {
    position: relative;
    height: 189px;
    margin-bottom: 24px;
    > span {
      position: absolute;
      bottom: 19px;
      right: 22px;
      color: #000;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.48px;
    }
  }
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin: 19px auto 0px auto;
  button {
    margin-left: 20px;
  }
  button:button {
    margin-left: 0px;
  }
`;
export default function Apply(props: {
  nextStep: () => void;
  breederId: number;
  dogId: number;
  onAlert: (txt: string) => void;
}) {
  const [because, setBecause] = useState('');
  const [mind, setMind] = useState('');
  const [canApply, setApply] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setApply(because !== '' && mind !== '');
  }, [because, mind]);

  const applyMatching = async () => {
    try {
      const { data } = await axios.post(API_PATHS.doMatching(), {
        breederId: props.breederId,
        dogId: props.dogId,
        pledgeContent1: because,
        pledgeContent2: mind,
      });
      console.log('data', data);
      if (data.status === 'ERROR' || data.status === 'FAIL') {
        if (data.data) window.alert(data.data);
        else window.alert('잠시 후 다시 진행해주세요');
      } else {
        props.nextStep();
      }
    } catch (e: any) {
      if (e.response?.data.status === 'FAIL') window.alert(e.response?.data.data);
      console.log('error ::::', e);
    }
  };
  return (
    <>
      <ProfileBox>
        <DemantionBox>
          <h3>1. 반려동물을 분양하려는 사유에 대해 간단히 작성 해 주세요.</h3>
          <div className="areabox">
            <textarea
              placeholder="분양하려는 사유를 작성해주세요"
              onChange={(event) => setBecause(event?.target.value)}
              maxLength={2000}
            ></textarea>
            <span>{because.length} / 2000</span>
          </div>
        </DemantionBox>
        <DemantionBox>
          <h3>2. 해당 견종을 분양하는 것에 있어 자신의 마음가짐을 작성해주세요.</h3>
          <div className="areabox">
            <textarea
              placeholder="분양 이유와 마음가짐을 작성해주세요"
              onChange={(event) => setMind(event?.target.value)}
              maxLength={2000}
            ></textarea>
            <span>{mind.length} / 2000</span>
          </div>
        </DemantionBox>
      </ProfileBox>

      <ButtonWrap>
        <Button
          buttonSize={ButtonSize.MEDIUM}
          buttonColor={canApply ? ButtonColor.MINT : ButtonColor.GRAY}
          onClick={() => (canApply ? applyMatching() : '')}
        >
          예약신청
        </Button>
        <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.BLACK} onClick={() => navigate('/dogs')}>
          취소
        </Button>
      </ButtonWrap>
    </>
  );
}
