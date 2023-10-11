import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { Center } from "@component/0min/Center";
import { Image } from "@component/0min/Image";
import { Column } from "@component/0min/Column";

import PetreeDogCatPNG from "@assets/0min/petree_dog_cat.png";
import CheckShieldBadgePNG from "@assets/0min/check_shield_badge.png";
import PetreeDogHugPNG from "@assets/0min/petree_dog_hug.png";

export const TestResult = () => {
  /**
   * TODO:
   * - 성공 / 실패에 따른 UI 변경 (버튼, 합격 불합격 텍스트)
   * - 점수 애니메이션 효과적용 (어떤 애니메이션?)
   */

  return (
    <S.TestResulstContainer>
      <S.CenterWithFullHeight>
        <Column styles={{ gap: "33px" }}>
          <Column styles={{ gap: "90px" }}>
            <Column styles={{ gap: "14px" }}>
              <Typography fontSize={"50px"} fontWeight={700}>
                반려견 기초 지식 테스트
              </Typography>
              <Typography fontSize={"40px"} fontWeight={500}>
                나의 지식 테스트 점수
              </Typography>
            </Column>

            <S.CenterWithGap>
              <Typography
                fontSize={"160px"}
                fontWeight={900}
                component={"span"}
              >
                60
              </Typography>
              <Typography fontSize={"80px"} fontWeight={500} component={"span"}>
                점
              </Typography>
              <Image
                src={PetreeDogCatPNG}
                alt="petree_dog_cat"
                width={160}
                height={235}
              />
            </S.CenterWithGap>

            <Center>
              <Image
                src={CheckShieldBadgePNG}
                alt="check_shield_badge"
                width={72}
                height={72}
              ></Image>
              <Typography fontSize="28px" fontWeight={500}>
                당신은 반려인이 되기 위한 기초지식테스트에{" "}
                <Typography component="strong" fontSize="28px" fontWeight={700}>
                  합격
                </Typography>
                하셨습니다.
              </Typography>
            </Center>
          </Column>

          <S.CenterWithGap>
            {/* 
            TODO: 테스트 통과 실패
            <Button variant="contained" size="large" color="error">
              다시하기
            </Button>
            <Button variant="contained" size="large" color="success">
              해설보기
            </Button> */}
            <Button variant="contained" size="large" color="success">
              해설보기
            </Button>
          </S.CenterWithGap>
        </Column>
        <S.Absolute>
          <Image
            src={PetreeDogHugPNG}
            alt="patree_dob_hug"
            width={540}
            height={540}
          />
        </S.Absolute>
      </S.CenterWithFullHeight>
    </S.TestResulstContainer>
  );
};

const S = {
  TestResulstContainer: styled.section`
    min-height: 100vh;
    position: relative;
    z-index: 2;
  `,
  CenterWithGap: styled(Center)`
    gap: 14px;
  `,
  CenterWithFullHeight: styled(Center)`
    min-height: 100vh;
  `,
  Absolute: styled.div`
    position: absolute;
    right: 0;
    z-index: -1;
  `,
};
