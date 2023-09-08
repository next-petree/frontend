import axios, { AxiosError, AxiosResponse } from 'axios';
import Edit, { IBreedInfo } from 'components/mypage/breed/Edit';
import { API_PATHS } from '../../../constants';
import { useEffectOnce } from 'hooks/useEffectOnce';
import MypageForm from 'layout/MypageForm';
import MypageLayout from 'layout/MypageLayout';
import { Link, useParams } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
import GoBackIcon from 'assets/images/mypage/go_back.svg';

export default function EditBreed() {
  const { id } = useParams<{ id: string }>();
  const [dogInfo, setDogInfo] = useState<IBreedInfo>({
    dogTypeId: 0,
    gender: '',
    birthDate: new Date(),
    name: '',
    management: '',
    dogImgFiles: [''],
  });

  const fetchDogInfo = async () => {
    try {
      const { data } = await axios.get<AxiosResponse<IBreedInfo>>(API_PATHS.myDog(Number(id)));
      setDogInfo(data.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      console.log(error);
    }
  };

  useEffectOnce(() => {
    fetchDogInfo();
  });
  return (
    <MypageLayout>
      <MypageForm>
        <MypageLayout.Header>
          <MypageLayout.Label>보유견종 수정</MypageLayout.Label>
          <Link
            to="/mypage/breed"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
              color: '#939393',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '-0.02625rem',
            }}
          >
            <img src={GoBackIcon} alt="뒤로가기" />
            <span>이전 페이지로</span>
          </Link>
        </MypageLayout.Header>
        <MypageLayout.Content>
          <Suspense fallback={<span>loading...</span>}>
            <Edit info={dogInfo} setInfo={setDogInfo} />
          </Suspense>
        </MypageLayout.Content>
      </MypageForm>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          margin: '1rem auto',
        }}
      >
        <Button buttonSize={ButtonSize.MEDIUM}>수정</Button>
        <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.BLACK}>
          삭제
        </Button>
      </div>
    </MypageLayout>
  );
}
