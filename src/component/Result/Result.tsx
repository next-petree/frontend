import React, { useEffect, useState } from 'react';
import { post } from '../../api/api';
import Result1 from '../../assets/images/Result1.png';
import Badge from '../../assets/images/Badge.png';

import {
  Wrapper,
  ResultWrapper,
  ResultTitle,
  ScoreTitle,
  ScoreWrapper,
  ScoreDiv,
  Score,
  ScoreImg,
  ResultInfo,
  BtnWrapper,
  RestartBtn,
  AnswerBtn,
  ResultFailed,
  ResultAcceptance,
} from './ResultStyle';

// type ResultResponse = {
//   status: string;
//   score: number;
//   explanations: [
//     { questionId: number; explanationText: string; correctChoiceId: number }
//   ];
//   passed: boolean;
// };

export default function ResultComp() {
  const [score, setScore] = useState<number>(0);
  const [passed, setPassed] = useState<boolean>(false);
  useEffect(() => {
    const storedResult = JSON.parse(localStorage.getItem('result') || '[]');
    setScore(storedResult.score);
    setPassed(storedResult.passed);
  }, []);

  return (
    <Wrapper>
      <ResultWrapper>
        <ResultTitle>반려견 기초지식 테스트</ResultTitle>
        <ScoreTitle>나의 지식 테스트 점수</ScoreTitle>
        <ScoreWrapper>
          <ScoreDiv>
            <Score>{score}</Score>점
          </ScoreDiv>
          <ScoreImg src={Result1} />
        </ScoreWrapper>
        {passed ? (
          <>
            <ResultInfo>
              <img src={Badge} />
              당신은 반려인이 되기 위한 기초지식테스트에&nbsp;
              <ResultAcceptance>합격</ResultAcceptance>
              하셨습니다.
            </ResultInfo>
            <BtnWrapper>
              {score === 100 ? (
                <AnswerBtn to="/answer" style={{ width: '100%' }}>
                  해설보기
                </AnswerBtn>
              ) : (
                <>
                  <RestartBtn to="/basic-test">다시하기</RestartBtn>
                  <AnswerBtn to="/answer">해설보기</AnswerBtn>
                </>
              )}
            </BtnWrapper>
          </>
        ) : (
          <>
            <ResultInfo>
              당신은 반려인이 되기 위한 기초지식테스트에&nbsp;
              <ResultFailed>불합격</ResultFailed>
              하셨습니다.
            </ResultInfo>
            <BtnWrapper>
              <RestartBtn to="/test-description">다시하기</RestartBtn>
              <AnswerBtn to="/answer">해설보기</AnswerBtn>
            </BtnWrapper>
          </>
        )}
      </ResultWrapper>
    </Wrapper>
  );
}

// const [score, setScore] = useState<number>(0);
// const [passed, setPassed] = useState<boolean>(false);
// useEffect(() => {
//   const submitAnswers = async () => {
//     try {
//       const userAnswers = JSON.parse(
//         localStorage.getItem('userAnswers') || '[]'
//       );
//       const response = await post<ResultResponse>('/api/basic-test/submit', {
//         answers: userAnswers,
//       });
//       localStorage.setItem('result', JSON.stringify(response.data));
//       console.log('결과 받아오기!!!!', response.data);
//       setScore(response.data.score);
//       setPassed(response.data.passed);
//     } catch (error: any) {
//       console.error(
//         '답변 제출 에러:',
//         error.response ? error.response.data : error.message
//       );
//       alert('답변 제출 과정에서 오류가 발생했습니다.');
//     }
//   };
//   submitAnswers();
// }, []);
