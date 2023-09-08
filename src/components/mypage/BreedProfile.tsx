import { useState } from 'react';
import styled from 'styled-components';
import Button, { ButtonSize } from 'components/common/button/Button';
import InputTextarea from 'components/mypage/InputTextarea';
import ProfileImg from 'components/mypage/ProfileImg';
import MypageForm from 'layout/MypageForm';
import MajorSelect, { BreedSelectType } from 'components/common/select/MajorSelect';

export default function BreedProfile() {
  const [value, setValue] = useState('');
  const [dogTypeIdList, setDogTypeIdList] = useState<BreedSelectType[] | undefined>();

  return (
    <>
      <MypageForm>
        <ProfileImg />
        <Span>프로필</Span>
        <InputTextarea
          label="자기소개"
          placeholder="키워드와 함께 짧은 글로 자기소개를 작성해주세요."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonWrap>
          <Button buttonSize={ButtonSize.MEDIUM}>저장</Button>
        </ButtonWrap>
      </MypageForm>
      <MypageForm>
        <Span>주력견종</Span>
        <ColumnWrap>
          <MajorSelect
            onChange={(v) => {
              setDogTypeIdList(v);
            }}
          />
        </ColumnWrap>
        <HashtagBox>{dogTypeIdList?.map((v) => <Hashtag>#{v.name}</Hashtag>)}</HashtagBox>
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

const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  width: 15rem;
`;

const HashtagBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Hashtag = styled.span`
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid #4ec1bf;
  background-color: #ffffff;
  margin-right: 0.5rem;
  font-weight: 500;
`;
