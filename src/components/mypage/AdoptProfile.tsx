import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button, { ButtonSize } from 'components/common/button/Button';
import InputTextarea from 'components/mypage/InputTextarea';
import ProfileImg from 'components/mypage/ProfileImg';
import MypageForm from 'layout/MypageForm';
import DwellingImg from './DwellingImg';
import axios from 'axios';
import { useModal } from 'hooks/useModal';

interface SelfInturoductionResponse {
  status: 'SUCCESS' | 'FAIL';
  data: string;
}
export default function AdoptProfile() {
  const { open } = useModal();
  const [introduction, setIntroduction] = useState<SelfInturoductionResponse | undefined>();
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<any>();

  const getSelfIntroduction = async () => {
    try {
      const { data: res } = await axios.get<SelfInturoductionResponse>('/me/profile/self-introduction');
      setIntroduction(res);
      setCount(res.data.length);
    } catch (e) {
      const err = e as any;
      console.log(err.response.data.data);
    }
  };

  const handleSubmit = () => {
    submitIntroduction();
    submitProfilImage();
  };

  const submitIntroduction = async () => {
    try {
      await axios
        .put('/me/profile/self-introduction', {
          content: introduction?.data,
        })
        .then((res: any) => {
          if (res.status === 200) {
            if (value === null) {
              open('저장되었습니다.', {
                closeOnOutsideClick: true,
                accept: {
                  text: '확인',
                  onClick: () => {},
                },
              });
            }
          }
        });
    } catch (e) {}
  };

  const submitProfilImage = async () => {
    if (value !== null) {
      const formData = new FormData();
      formData.append('image', value);
      try {
        await axios
          .post('/me/profile/image/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res: any) => {
            if (res.status === 200) {
              open('저장되었습니다.', {
                closeOnOutsideClick: true,
                accept: {
                  text: '확인',
                  onClick: () => {},
                },
              });
            }
          });
      } catch (e) {}
    }
  };

  useEffect(() => {
    getSelfIntroduction();
  }, []);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <MypageForm>
        <ProfileImg onChange={(v) => setValue(v)} />
        <Span>프로필</Span>
        <InputTextarea
          label="자기소개"
          placeholder="키워드와 함께 짧은 글로 자기소개를 작성해주세요."
          value={introduction?.data}
          count={count}
          onChange={(e) => {
            setIntroduction((prev: any) => ({ ...prev, data: e.target.value }));
            setCount(e.target.value.length);
          }}
        />
        <ButtonWrap>
          <Button buttonSize={ButtonSize.MEDIUM} onClick={handleSubmit}>
            저장
          </Button>
        </ButtonWrap>
      </MypageForm>
      <MypageForm>
        <Span>주거환경</Span>
        <RowWrap>
          <DwellingImg label="마당" />
          <DwellingImg label="화장실" />
          <DwellingImg label="거실" />
        </RowWrap>
        <ButtonWrap>
          <Button buttonSize={ButtonSize.MEDIUM}>저장</Button>
        </ButtonWrap>
      </MypageForm>
    </>
  );
}
const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Span = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
`;
const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
