import { useEffect, useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_PATHS, CONSTANTS } from '../../constants';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const DemantionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
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
export default function Apply(props: { nextStep: () => void; breederId: number; dogId: number }) {
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
      if (data.status === 'ERROR' || data.status === 'FAIL') throw new Error('500 error');
      else props.nextStep();
    } catch (e) {
      const err = e as AxiosError;
      console.log('error ::::', err.response?.data);
    }
  };
  return (
    <ProfileBox>
      <DemantionBox>
        <h3>1. 반려동물을 분양하려는 사유에 대해 간단히 작성 해 주세요.</h3>
        <textarea
          placeholder="분양하려는 사유를 작성해주세요"
          onChange={(event) => setBecause(event?.target.value)}
        ></textarea>
      </DemantionBox>
      <DemantionBox>
        <h3>2. 해당 견종을 분양하려는 이유와 마음가짐을 작성해주세요.</h3>
        <textarea
          placeholder="분양 이유와 마음가짐을 작성해주세요"
          onChange={(event) => setMind(event?.target.value)}
        ></textarea>
      </DemantionBox>
      <ButtonWrap>
        <Button
          buttonSize={ButtonSize.MEDIUM}
          buttonColor={canApply ? ButtonColor.MINT : ButtonColor.GRAY}
          onClick={applyMatching}
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
