import { Button } from "@mui/material";

import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { TestQuestionForm } from "@component/Test/TestQuestonForm";
import { ProgressRectangleGroup } from "@component/Test/Introduce/Question/TestQuestionProgressRectangle";

export const TestQuestionController = () => {
  //TODO: 전역상태 or browser url queryParams로 단계공유, custom hook 분리

  return (
    <Column styles={{ gap: "40px" }}>
      <TestQuestionForm>
        <TestQuestionForm.Header>
          <TestQuestionForm.Title>
            반려견 기초 지식 테스트
          </TestQuestionForm.Title>
        </TestQuestionForm.Header>

        <TestQuestionForm.Content>
          <Column styles={{ gap: "28px" }}>
            <Center>
              <TestQuestionForm.Step>01/10</TestQuestionForm.Step>
            </Center>

            <TestQuestionForm.Paragraph>
              개를 크게 소형견, 중형견, 대형견으로 나눌 때 소형견에 해당하는
              성견의 체중과 체고는 무엇인가?
            </TestQuestionForm.Paragraph>

            <Column styles={{ gap: "16px" }}>
              {/** 클릭 시 체크 하단 다음 버튼 클릭 시 넘어가기 */}
              <TestQuestionForm.Option checked>
                ① 체중 10Kg 이하, 체고 40cm 미만
              </TestQuestionForm.Option>
              <TestQuestionForm.Option checked={false}>
                ① 체중 10Kg 이하, 체고 40cm 미만① 체중 10Kg 이하, 체고 40cm 미만
              </TestQuestionForm.Option>
              <TestQuestionForm.Option checked={false}>
                ① 체중 10Kg 이하, 체고 40cm 미만① 체중 10Kg 이하, 체고 40cm 미만
                ① 체중 10Kg 이하, 체고 40cm 미만
              </TestQuestionForm.Option>
              <TestQuestionForm.Option checked={false}>
                ① 체중 10Kg 이하, 체고 40cm 미만① 체중 10Kg 이하, 체고 40cm 미만
                ① 체중 10Kg 이하, 체고 40cm 미만 ① 체중 10Kg 이하, 체고 40cm
                미만
              </TestQuestionForm.Option>
              <TestQuestionForm.Option checked={false}>
                ① 체중 10Kg 이하, 체고 40cm 미만① 체중 10Kg 이하, 체고 40cm 미만
                ① 체중 10Kg 이하, 체고 40cm 미만 ① 체중 10Kg 이하, 체고 40cm
                미만 ① 체중 10Kg 이하, 체고 40cm 미만
              </TestQuestionForm.Option>
            </Column>
          </Column>
        </TestQuestionForm.Content>

        <TestQuestionForm.Footer>
          <Center styles={{ gap: "19px" }}>
            <Button variant="contained" fullWidth>
              이전
            </Button>
            <Button variant="contained" fullWidth>
              다음
            </Button>
          </Center>
        </TestQuestionForm.Footer>
      </TestQuestionForm>
      <ProgressRectangleGroup />
    </Column>
  );
};
