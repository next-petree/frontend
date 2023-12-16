import React, { useEffect, useState } from 'react';

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
  selectedExample: number | null;
};
const choiceLabels = ['①', '②', '③', '④', '⑤'];
function TestComp(props: TestProps) {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const exam = [...props.Example];
  useEffect(() => {
    setSelectedExample(props.selectedExample);
  }, [props.TestNum]);
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
              // 선택된 Example이 현재 Example과 같다면 체크
              checked={selectedExample === i + 1}
              onChange={() => {
                props.onAnswer(v);
                setSelectedExample(i + 1); // 선택된 Example 업데이트
              }}
            ></Example>
            <ExampleLabel htmlFor={`example-${i}`}>
              {choiceLabels[i]} {v}
            </ExampleLabel>
          </React.Fragment>
        ))}
      </ExampleWrap>
    </TestWrap>
  );
}

export default TestComp;
