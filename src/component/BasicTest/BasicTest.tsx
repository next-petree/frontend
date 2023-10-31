import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { get, post } from '../../api/api';
import TestComp from './BasicTestComp/TestComp';
import petfoot from '../../assets/images/pets_black_24dp.png';
import petree from '../../assets/images/펫트리.png';
import TestBG from '../../assets/images/TestBG.png';

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

type Choice = {
  id: number;
  choiceText: string;
};

interface Question {
  id: number;
  questionText: string;
  TestNum: number;
  choices: Choice[];
}

type TestResponse = {
  status: string;
  data: {
    questions: [
      id: number,
      questionText: string,
      choices: [id: number, choiceText: string]
    ];
  };
};

type ResultResponse = {
  status: string;
  score: number;
  explanations: [
    { questionId: number; explanationText: string; correctChoiceId: number }
  ];
  passed: boolean;
};

const BasicTest: React.FC = () => {
  const [testData, setTestData] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    Array<{ questionId: number; selectedChoiceId: number }>
  >([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  useEffect(() => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const getTest = async () => {
      try {
        const response = await get<TestResponse>('/api/basic-test/start');

        if (response.data.status === 'SUCCESS') {
          console.log('문제 받기 성공!', response.data);
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
        console.error(
          '시험 에러:',
          error.response ? error.response.data : error.message
        );
        alert('로그인 과정에서 오류가 발생했습니다.');
      }
    };
    getTest();
  }, []);

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
    if (selectedAnswer !== null && testData) {
      const newUserAnswers = [
        ...userAnswers,
        {
          questionId: testData[currentQuestionIndex].id,
          selectedChoiceId: selectedAnswer,
        },
      ];

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
          console.log('결과 받아오기!!!!', response.data);
          navigate('/result');
        } catch (error: any) {
          console.error(
            '답변 제출 에러:',
            error.response ? error.response.data : error.message
          );
          alert('답변 제출 과정에서 오류가 발생했습니다.');
        }
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  // '이전' 버튼 보이기/숨기기
  const isPrevButtonVisible = currentQuestionIndex > 0;

  const currentQuestion = testData ? testData[currentQuestionIndex] : null;

  return (
    <Wrapper>
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
                {isPrevButtonVisible && (
                  <PreBtn onClick={handlePrev}>이전</PreBtn>
                )}
                <NextBtn onClick={handleNext}>다음</NextBtn>
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
