import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from '../../api/api';
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

interface Question {
  TestNum: string;
  Question: string;
  Example: string[];
}

const BasicTest: React.FC = () => {
  const [testData, setTestData] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const data = localStorage.getItem('testData');
    if (data) {
      setTestData(JSON.parse(data));
    } else {
      // 로컬 스토리지에 데이터가 없는 경우, axios로 데이터 불러오기
      axios
        .get('http://3.37.230.170:8080/api/basic-test/start')
        .then((response) => {
          setTestData(response.data);
          // 로컬 스토리지에 데이터 저장
          localStorage.setItem('testData', JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
  }, []);

  const handleAnswer = (answer: string) => {
    if (testData) {
      setUserAnswers({
        ...userAnswers,
        [testData[currentQuestionIndex].TestNum]: answer,
      });
    }
  };

  const handleNext = () => {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
          {/* 백엔드 연결 후 map 함수로 반복문으로 Props 넣어야됨!!*/}
          {currentQuestion && (
            <>
              <TestComp
                TestNum={currentQuestion.TestNum || '01'}
                Question={currentQuestion.Question || '1번 문제'}
                Example={currentQuestion.Example || ['1', '2', '3', '4', '5']}
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
