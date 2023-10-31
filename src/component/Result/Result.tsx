import React from 'react';
import ResultBG from '../../assets/images/ResultBG.png';
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

export default function ResultComp() {
  return (
    <Wrapper>
      <ResultWrapper>
        <ResultTitle>반려견 기초지식 테스트</ResultTitle>
        <ScoreTitle>나의 지식 테스트 점수</ScoreTitle>
        <ScoreWrapper>
          <ScoreDiv>
            <Score>60</Score>점
          </ScoreDiv>
          <ScoreImg src={Result1} />
        </ScoreWrapper>
        {/* 70점 이상이 합격? */}
        {/* 합격이면 합격 뱃지 보여야됨!! */}
        <ResultInfo>
          당신은 반려인이 되기 위한 기초지식테스트에&nbsp;
          <ResultFailed>불합격</ResultFailed>
          하셨습니다.
        </ResultInfo>
        <ResultInfo>
          <img src={Badge} />
          당신은 반려인이 되기 위한 기초지식테스트에&nbsp;
          <ResultAcceptance> 합격</ResultAcceptance>
          하셨습니다.
        </ResultInfo>
        <BtnWrapper>
          {/* 100점이면 해설보기 안보이게!! */}
          <RestartBtn>다시하기</RestartBtn>
          <AnswerBtn>해설보기</AnswerBtn>
        </BtnWrapper>
      </ResultWrapper>
    </Wrapper>
  );
}
