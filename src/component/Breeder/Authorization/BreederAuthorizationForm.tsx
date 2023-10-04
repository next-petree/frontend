import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { Image } from "@component/0min/Image";
import styled from "@emotion/styled";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  SnackbarOrigin,
  TextField,
  Typography,
} from "@mui/material";

import { BreederAuthorizationModal } from "@component/Breeder/Authorization/BreederAuthorizationModal";

import DogPNG from "@assets/0min/dog.png";
import { useState } from "react";

type ControlSnackBarState = { open: boolean } & SnackbarOrigin;

const useControlSnackbar = () => {
  const [controlSnackbar, setControlSnackbar] = useState<ControlSnackBarState>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const showSnackbar = () => {
    setControlSnackbar((pre) => ({ ...pre, open: true }));
  };

  const closeSnackbar = () => {
    setControlSnackbar((pre) => ({ ...pre, open: false }));
  };

  return {
    controlSnackbar,
    showSnackbar,
    closeSnackbar,
  };
};

export const BreederAuthorizationForm = () => {
  const { controlSnackbar, showSnackbar, closeSnackbar } = useControlSnackbar();

  return (
    <S.Container>
      <Snackbar
        anchorOrigin={{
          vertical: controlSnackbar.vertical,
          horizontal: controlSnackbar.horizontal,
        }}
        open={controlSnackbar.open}
        onClose={closeSnackbar}
        key={controlSnackbar.vertical + controlSnackbar.horizontal}
      >
        <S.SnackbarContent>
          <Typography
            width={"100%"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={500}
          >
            제출되었습니다.
          </Typography>
        </S.SnackbarContent>
      </Snackbar>

      <S.Top>
        <Column styles={{ gap: "24px", horizontalAlign: "start" }}>
          <Typography component={"h2"} fontSize={28} fontWeight={500}>
            브리더 인증
          </Typography>
          <Typography fontSize={20} fontWeight={500}>
            아래 자격증을 업로드하여 더 전문적인 브리더를 향해 발돋움하실 수
            있습니다.
          </Typography>
        </Column>
      </S.Top>

      <S.Content>
        <Column styles={{ gap: "66px" }}>
          <Column styles={{ horizontalAlign: "start", gap: "22px" }}>
            <Typography component={"h3"} fontSize={24} fontWeight={500}>
              반려동물 종합관리사
            </Typography>
            <S.ContentBox>
              <Center styles={{ gap: "100px", verticalAlign: "start" }}>
                <Image src={DogPNG} alt={"DogPNG"} width={155} height={210} />

                <Column
                  styles={{
                    gap: "41px",
                  }}
                >
                  <ul>
                    <Typography component="li" fontSize={20} fontWeight={500}>
                      반려동물종합관리사는 자격시험은 반려동물전문가로써
                      반려동물 총론 및 법 률·행정, 고객 응대 및 서비스,애견 미용
                      기초, 애견 훈련 기초, 브리더 윤리 및 번식에 대한 지식을
                      요구합니다.
                    </Typography>
                    <Typography component="li" fontSize={20} fontWeight={500}>
                      단일 등급이며, 누구나 취득할 수 있습니다.
                    </Typography>
                    <Typography component="li" fontSize={20} fontWeight={500}>
                      반려동물종합관리사의 취득방법은 한국애견연맹 규정에
                      의합니다.
                    </Typography>
                  </ul>
                  <Center styles={{ horizontalAlign: "end" }}>
                    <ul>
                      <Typography component="li" fontSize={20} fontWeight={500}>
                        ※ 자격증 종류 : 등록 민간자격
                      </Typography>
                      <Typography component="li" fontSize={20} fontWeight={500}>
                        ※ 자격 등록 번호 : 2017-004402
                      </Typography>
                    </ul>
                  </Center>
                </Column>
              </Center>
            </S.ContentBox>
            <Center styles={{ horizontalAlign: "end" }}>
              <BreederAuthorizationModal
                content={
                  <Image src={DogPNG} alt="dog" width={861} height={885} />
                }
              >
                <Button variant="contained">자격증 취득방법 자세히보기</Button>
              </BreederAuthorizationModal>
            </Center>
          </Column>

          <Column styles={{ horizontalAlign: "start", gap: "22px" }}>
            <Typography component={"h3"} fontSize={24} fontWeight={500}>
              반려동물 행동교정사
            </Typography>
            <S.ContentBox>
              <Center styles={{ gap: "100px", verticalAlign: "start" }}>
                <Image src={DogPNG} alt={"DogPNG"} width={155} height={210} />
                <Column
                  styles={{
                    gap: "41px",
                  }}
                >
                  <ul>
                    <Typography component="li" fontSize={20} fontWeight={500}>
                      반려동물행동교정사는 반려동물의 문제 행동을 교정하는
                      전문가로써 반려동물행동교정사, 반려동물의 행동, 반려동물
                      교정이론 및 교육, 생활법률, 동물보호법, 반려동물 보호자
                      상담, 반려동물 보호자 교육에 대한 지식을 요구합니다.
                    </Typography>
                    <Typography component="li" fontSize={20} fontWeight={500}>
                      반려동물행동교정사 자격증 등급은 3급,2급,1급으로
                      나누어집니다.
                    </Typography>
                    <Typography component="li" fontSize={20} fontWeight={500}>
                      반려동물행동교정사의 취득방법은 한국애견연맹 규정에
                      의합니다.
                    </Typography>
                  </ul>
                  <Center styles={{ horizontalAlign: "end" }}>
                    <ul>
                      <Typography component="li" fontSize={20} fontWeight={500}>
                        ※ 자격증 종류 : 등록 민간자격
                      </Typography>
                      <Typography component="li" fontSize={20} fontWeight={500}>
                        ※ 자격 등록 번호 : 2022-004084호
                      </Typography>
                    </ul>
                  </Center>
                </Column>
              </Center>
            </S.ContentBox>
            <Center styles={{ horizontalAlign: "end" }}>
              <BreederAuthorizationModal
                content={
                  <Image src={DogPNG} alt="dog" width={861} height={1800} />
                }
              >
                <Button variant="contained">자격증 취득방법 자세히보기</Button>
              </BreederAuthorizationModal>
            </Center>
          </Column>
        </Column>
      </S.Content>

      <S.Bottom>
        <Typography component={"h3"} fontSize={24} fontWeight={500}>
          자격증 제출
        </Typography>
        <Center styles={{ horizontalAlign: "start" }}>
          <RadioGroup>
            <FormControlLabel
              value="반려동물 종합관리사"
              control={<Radio />}
              label="반려동물 종합관리사"
              labelPlacement="start"
              sx={{ margin: 0 }}
            />
            <FormControlLabel
              value="반려동물 행동교정사"
              control={<Radio />}
              label="반려동물 행동교정사"
              labelPlacement="start"
              sx={{ margin: 0 }}
            />
          </RadioGroup>
          <TextField placeholder="첨부파일" type="file" />
          <Button
            variant="contained"
            size="large"
            sx={{ marginLeft: "18px" }}
            onClick={showSnackbar}
          >
            제출하기
          </Button>
        </Center>
      </S.Bottom>
    </S.Container>
  );
};

const S = {
  Container: styled.main`
    box-sizing: border-box;
    padding: 88px 124px;
    border-radius: 32px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);

    margin: 0 auto;
    max-width: 1440px;
  `,
  Top: styled.div`
    margin-bottom: 79px;
  `,
  Content: styled.section``,
  Bottom: styled.div`
    margin-top: 52px;
  `,
  ContentBox: styled.div`
    box-sizing: border-box;
    padding: 20px 80px;

    border-radius: 8px;
    border: 1px solid #969696;
  `,
  SnackbarContent: styled.div`
    min-width: 480px;
    padding: 40px;

    border-radius: 32px;
    background: #fff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
  `,
};
