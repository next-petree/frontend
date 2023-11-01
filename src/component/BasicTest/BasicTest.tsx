import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../../api/api';
import TestComp from './BasicTestComp/TestComp';
import petfoot from '../../assets/images/pets_black_24dp.png';
import petree from '../../assets/images/펫트리.png';
import TestBG from '../../assets/images/TestBG.png';
import LoginModal from '../Modal/LoginModal';
import base64 from 'base-64';
import {
  Choice,
  Question,
  TestResponse,
  ResultResponse,
} from '../../types/index';

import {
  Wrapper,
  TitleWrap,
  TestWrapper,
  BGImg,
  TestModalWrap,
  TestTitle,
  MoveBtnWrap,
  PreBtn,
  NextBtn,
} from './BasicTestStyle';

const BasicTest: React.FC = () => {
  const [testData, setTestData] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    Array<{ questionId: number; selectedChoiceId: number }>
  >([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태 변수
  const [showLoginModal, setShowLoginModal] = useState(false); // 로그인 모달을 보여줄지 여부를 결정하는 상태 변수
  const [errorMessage, setErrorMessage] = useState<string>(''); // 에러 메시지를 관리하는 상태 변수
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const getTest = async () => {
      try {
        const response = await get<TestResponse>('/api/basic-test/start');

        if (response.data.status === 'SUCCESS') {
          // 로컬 스토리지에 문제 데이터 저장
          localStorage.setItem(
            'questions',
            JSON.stringify(response.data.data.questions)
          );
          const storedQuestions = JSON.parse(
            localStorage.getItem('questions') || '[]'
          );
          setTestData(storedQuestions);
        }
      } catch (error: any) {
        setTestData([
          {
            id: 1,
            questionText:
              '개를 크게 소형견, 중형견, 대형견으로 나눌때 소형견에 해당하는 성견의 체중과 체고는 무엇인가?',
            TestNum: 1,
            choices: [
              { id: 1, choiceText: '체중 10kg이하, 체고 40cm 미만' },
              { id: 2, choiceText: '체중 20kg이하, 체고 40cm 미만' },
              { id: 3, choiceText: '체중 30kg이하, 체고 40cm 미만' },
              { id: 4, choiceText: '체중 40kg이하, 체고 40cm 미만' },
              { id: 5, choiceText: '체중 50kg이하, 체고 40cm 미만' },
            ],
          },
        ]);
      }
    };

    getTest();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setErrorMessage('서비스 이용을 위해 로그인을 하세요.');
    } else {
      setErrorMessage('');
    }
  }, [isLoggedIn]);

  const handleAnswer = (answer: string) => {
    if (testData) {
      const selectedChoice = testData[currentQuestionIndex].choices.find(
        (choice) => choice.choiceText === answer
      );

      if (selectedChoice) {
        setSelectedAnswer(selectedChoice.id);
      }
    }
  };

  const handleNext = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (selectedAnswer !== null && testData) {
      if (selectedAnswer !== null && testData) {
        const currentQuestionId = testData[currentQuestionIndex].id;
        const existingAnswerIndex = userAnswers.findIndex(
          (answer) => answer.questionId === currentQuestionId
        );
        let newUserAnswers;
        if (existingAnswerIndex !== -1) {
          // 이미 같은 questionId를 가진 답변이 있으면 selectedChoiceId 갱신
          newUserAnswers = [...userAnswers];
          newUserAnswers[existingAnswerIndex].selectedChoiceId = selectedAnswer;
        } else {
          // 같은 questionId를 가진 답변이 없으면 새 답변 추가
          newUserAnswers = [
            ...userAnswers,
            {
              questionId: currentQuestionId,
              selectedChoiceId: selectedAnswer,
            },
          ];
        }

        setUserAnswers(newUserAnswers);
        localStorage.setItem('userAnswers', JSON.stringify(newUserAnswers));

        if (currentQuestionIndex + 1 >= testData.length) {
          try {
            const response = await post<ResultResponse>(
              '/api/basic-test/submit',
              {
                answers: newUserAnswers,
              }
            );
            localStorage.setItem('result', JSON.stringify(response.data));
            navigate('/result');
          } catch (error: any) {
            if (
              error.response &&
              error.response?.data &&
              (error.response?.data?.data === '분양희망자 회원이 아닙니다.' ||
                error.response?.data?.data === '해당 회원을 찾을 수 없습니다.')
            ) {
              setErrorMessage('분양 희망자 회원이 아닙니다.'); // 에러 메시지 설정
              setShowLoginModal(true); // 로그인 모달 보여주기
            } else {
              setErrorMessage('답변 제출 과정에서 오류가 발생했습니다.'); // 기본 에러 메시지 설정
            }
          }
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null); // 선택한 답변 초기화
        }
      }
    }
  };

  const handlePrev = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  // '이전' 버튼 보이기/숨기기
  const isPrevButtonVisible = currentQuestionIndex > 0;

  const currentQuestion = testData ? testData[currentQuestionIndex] : null;

  return (
    <Wrapper>
      {/* 로그인 모달 추가 */}
      {errorMessage && (
        <LoginModal
          onLogin={() => {
            setIsLoggedIn(true);
            setErrorMessage(''); // 로그인에 성공하면 에러 메시지 초기화
          }}
          onClose={() => setShowLoginModal(false)}
          errorMessage={errorMessage} // 에러 메시지 prop 전달
        />
      )}
      <TestWrapper>
        <TitleWrap>
          <img src={petfoot} />
          <img src={petree}></img>
        </TitleWrap>
        <TestModalWrap>
          <TestTitle>반려견 기초 지식 테스트</TestTitle>
          {currentQuestion && (
            <>
              <TestComp
                TestNum={(currentQuestionIndex + 1).toString().padStart(2, '0')}
                Question={currentQuestion.questionText}
                Example={currentQuestion.choices.map(
                  (choice) => choice.choiceText
                )}
                onAnswer={handleAnswer}
              ></TestComp>
              <MoveBtnWrap>
                {isPrevButtonVisible ? (
                  <>
                    <PreBtn onClick={handlePrev}>이전</PreBtn>
                    <NextBtn onClick={handleNext}>다음</NextBtn>
                  </>
                ) : (
                  <NextBtn style={{ width: '100%' }} onClick={handleNext}>
                    다음
                  </NextBtn>
                )}
              </MoveBtnWrap>
            </>
          )}
        </TestModalWrap>
      </TestWrapper>
      <BGImg src={TestBG} />
    </Wrapper>
  );
};

export default BasicTest;
