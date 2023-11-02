import React from 'react';

import {
  TestWrap,
  TestTitle,
  TestNumber,
  Question,
  ExampleWrap,
  Example,
  ExampleLabel,
} from './TestCompStyle';

type TestProps = {
  TestNum: string;
  Question: string;
  Example: string[];
  onAnswer: (answer: string) => void;
};

function TestComp(props: TestProps) {
  const exam = [...props.Example];
  return (
    <TestWrap>
      <TestNumber>
        <span>{props.TestNum}</span>/<span>12</span>
      </TestNumber>
      <Question>{props.Question}</Question>
      <ExampleWrap>
        {exam.map((v, i) => (
          <React.Fragment key={i}>
            <Example
              id={`example-${i}`}
              type="radio"
              name="example"
              value={v}
              onChange={(event) => props.onAnswer(event.target.value)}
            ></Example>
            <ExampleLabel htmlFor={`example-${i}`}>
              {props.Example[i]}
            </ExampleLabel>
          </React.Fragment>
        ))}
      </ExampleWrap>
    </TestWrap>
  );
}

export default TestComp;
