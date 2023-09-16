import MypageLayout from 'layout/MypageLayout';
import GoBackIcon from 'assets/images/mypage/go_back.svg';
import { Link } from 'react-router-dom';
import EditBreed from 'components/mypage/breed/Edit';
import MypageForm from 'layout/MypageForm';
import Button, { ButtonSize } from 'components/common/button/Button';

export default function NewBreed() {
  return (
    <MypageLayout>
      <MypageForm>
        <MypageLayout.Header>
          <MypageLayout.Label>보유견종 글쓰기</MypageLayout.Label>
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
          <EditBreed />
        </MypageLayout.Content>
      </MypageForm>
      <Button
        style={{
          margin: '0 auto',
          padding: '0.75rem 1.5rem',
        }}
        buttonSize={ButtonSize.MEDIUM}
      >
        추가
      </Button>
    </MypageLayout>
  );
}
