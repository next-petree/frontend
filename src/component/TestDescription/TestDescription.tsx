// 코드 파일
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  TestHeader,
  TitleWrapper,
  FirstTitle,
  SecondTitle,
  TestInfoWrapper,
  StartTestBtnWrap,
  StartTestBtn,
} from './TestDescriptionStyle';
import TestInfo1 from '../../assets/images/TestInfo1.png';
import TestInfo2 from '../../assets/images/TestInfo2.png';
import TestInfo3 from '../../assets/images/TestInfo3.png';
import TestInfo4 from '../../assets/images/TestInfo4.png';
import TestInfo5 from '../../assets/images/TestInfo5.png';
import TestDescComp from './TestDescriptionComp/TestDescComp';
import LoginModal from '../Modal/LoginModal';
import DecodeToken from '../../utils/DecodeJWT/DecodeJWT';

const info = [
  {
    img: TestInfo1,
    title: '반려동물에 대한 지식과 이해를 높이기 위한',
    text: '올바른 반려문화 조성을 위해 반려동물(강아지, 고양이)양육돌봄문제와 동물보호법 등 서울시 정책문제를 주기적으로 온라인에 공개하는 문제은행 입니다.',
  },
  {
    img: TestInfo2,
    title: '문제은행 내용은 어떻게 되나요?',
    text: (
      <>
        {
          '문제는 크게 강아지, 고양이부문과 양육단계별로 구분되어 있고 정답과 해설이 같이 포함되어있습니다.'
        }
        <br />
        {
          '문제들은 강아지, 고양이 관련 야육 돌봄지식 그리고 동물 보호법 및 서울시 동물 보호정책 내용들을 묻고 있습니다.'
        }
      </>
    ),
  },
  {
    img: TestInfo3,
    title: '출제자는 누구인가요?',
    text: (
      <>
        {
          '양육돌봄지식 문제(건강관리, 행동학, 영양학 등)는 서울시수의사회에서 문제를 제공해주셨고,'
        }
        <br />
        {
          '동물보호법 및 서울시 동물보호정책은 서울시 동물보호과에서 출제하였습니다.'
        }
      </>
    ),
  },
  {
    img: TestInfo4,
    title: '언제 공개되나요?',
    text: (
      <>
        {
          '2023년 5월 2일 부터 2주 간격으로 매달 2회씩(회당 24문제)가 공개됩니다.'
        }
        <br />
        {'공개장소 : 교육 > 반려인 지식문제은행 공개 게시판'}
      </>
    ),
  },
  {
    img: TestInfo5,
    title: '어떻게 활용하나요?',
    text: '반려동물에 관심이 있는 시민이면 누구나 참여하여 반려동물에 대한 지식확인, 그리고 틀린 문제 해설을 통해 새로운 정보들을 얻는 기회가 되시길 바랍니다!',
  },
];

function TestDescription() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === info.length) {
      setShowButton(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleStartTest = () => {
    if (!isLoggedIn) {
      window.scroll({ top: 0, behavior: 'smooth' }); // 스크롤을 페이지 상단으로 이동
      setShowLoginModal(true);
      setErrorMessage('서비스 이용을 위해 로그인을 하세요.'); // 에러 메시지 설정
    } else {
      const getUser = DecodeToken();
      if (!getUser) {
        window.scroll({ top: 0, behavior: 'smooth' });
        setShowLoginModal(true);
        setErrorMessage('서비스 이용을 위해 로그인을 하세요.');
      }
      if (getUser.role === 'ADOPTER') {
        navigate('/basic-test');
      } else if (getUser.role === 'BREEDER') {
        window.scroll({ top: 0, behavior: 'smooth' });
        setShowLoginModal(true);
        setErrorMessage('분양 희망자 회원이 아닙니다.');
      } else {
        window.scroll({ top: 0, behavior: 'smooth' });
        setShowLoginModal(true);
        setErrorMessage('서비스 이용을 위해 로그인을 하세요.');
      }
    }
  };
  return (
    <>
      <Wrapper>
        {/* 로그인 모달 추가 */}
        {showLoginModal && (
          <LoginModal
            top={'8'}
            onLogin={() => setIsLoggedIn(true)}
            onClose={() => setShowLoginModal(false)}
            errorMessage={errorMessage} // 에러 메시지 prop 전달
          />
        )}
        <TitleWrapper>
          <FirstTitle>반려동물에 대한 지식과 이해를 높이기 위한</FirstTitle>
          <SecondTitle>2023년 반려인 지식 문제은행 안내</SecondTitle>
        </TitleWrapper>
        <TestInfoWrapper>
          {info.slice(0, currentIndex).map((value, i) => (
            <TestDescComp
              key={i}
              img={value.img}
              title={value.title}
              text={value.text}
            />
          ))}
        </TestInfoWrapper>
        {showButton && (
          <StartTestBtnWrap>
            <StartTestBtn onClick={handleStartTest}>테스트 실시</StartTestBtn>
          </StartTestBtnWrap>
        )}
      </Wrapper>
    </>
  );
}
export default TestDescription;
