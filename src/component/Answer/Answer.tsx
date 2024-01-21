import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  AnswerTitle,
  SubTitle,
  AnswerWrapper,
  Btn,
} from "./AnswerStyle";
import AnswerComp1 from "./AnswerComp1/AnswerComp1";
import { QuestionType, AnswersType, ResultType } from "../../types/index";

export default function AnswerComp() {
  const navigate = useNavigate();
  const storedQuestions: QuestionType = JSON.parse(
    sessionStorage.getItem("questions") || "[]",
  );
  const storedUserAnswers: AnswersType = JSON.parse(
    sessionStorage.getItem("userAnswers") || "[]",
  );
  const storedResult: ResultType = JSON.parse(
    sessionStorage.getItem("result") || "{}",
  );

  function moveBack() {
    navigate(-1);
  }

  return (
    <Wrapper>
      <AnswerTitle>해답지</AnswerTitle>
      <SubTitle>반려인 지식 문제은행</SubTitle>
      <AnswerWrapper>
        {storedQuestions.map((question, index) => {
          const result = storedResult.explanations.find(
            res => res.questionId === question.id,
          );
          const userAnswer = storedUserAnswers.find(
            answer => answer.questionId === question.id,
          );
          return (
            <AnswerComp1
              id={question.id}
              questionId={question.id}
              key={index}
              num={index}
              question={question.questionText}
              choices={question.choices}
              solution={result?.explanationText || ""}
              correctChoiceId={result?.correctChoiceId}
              selectedChoiceId={userAnswer?.selectedChoiceId} // selectedChoiceId를 props로 전달
            />
          );
        })}
      </AnswerWrapper>
      <Btn
        onClick={() => {
          moveBack();
        }}
      >
        확인
      </Btn>
    </Wrapper>
  );
}
