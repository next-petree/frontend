import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { Column } from "@component/0min/Column";
import { TEST_INTRODUCE_CONTENTS } from "@component/Test/Introduce/const";
import { TestIntroduceContent } from "@component/Test/Introduce/TestIntroduceContent";
import { Center } from "@component/0min/Center";
import { useNavigate } from "react-router-dom";

export const TestIntroduce = () => {
  const navigate = useNavigate();

  return (
    <S.TestIntroduceContainer>
      <Column styles={{ gap: "13px" }}>
        <Typography component={"h2"} fontSize={"40px"}>
          반려동물에 대한 지식과 이해를 높이기 위한
        </Typography>
        <Typography component={"h1"} fontSize={"60px"}>
          2023년 반려인 지식 문제은행 안내
        </Typography>
      </Column>

      <S.TestContentsContainer>
        <Column styles={{ gap: "120px" }}>
          {TEST_INTRODUCE_CONTENTS.map(({ src, alt, title, paragraph }) => (
            <TestIntroduceContent key={title}>
              <S.CenterWithGap>
                <TestIntroduceContent.Image src={src} alt={alt} />
                <S.TextLeft>
                  <Column
                    styles={{
                      gap: "12px",
                      horizontalAlign: "start",
                    }}
                  >
                    <TestIntroduceContent.Primary>
                      {title}
                    </TestIntroduceContent.Primary>
                    <TestIntroduceContent.Secondary>
                      {paragraph}
                    </TestIntroduceContent.Secondary>
                  </Column>
                </S.TextLeft>
              </S.CenterWithGap>
            </TestIntroduceContent>
          ))}
        </Column>
      </S.TestContentsContainer>

      <S.TestIntroduceFooter>
        <Center>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/test/question")}
          >
            테스트 실시
          </Button>
        </Center>
      </S.TestIntroduceFooter>
    </S.TestIntroduceContainer>
  );
};

const S = {
  TestIntroduceContainer: styled.div`
    margin-top: 154px;
  `,
  TestContentsContainer: styled.section`
    margin: 56px auto 90px auto;
  `,
  TextLeft: styled.div`
    text-align: left;
  `,
  CenterWithGap: styled(Center)`
    gap: 120px;
  `,
  TestIntroduceFooter: styled.footer`
    margin-bottom: 201px;
  `,
};
