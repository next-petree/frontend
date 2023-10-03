import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { CommonModal } from "@component/0min/CommonModal";
import { useControlModal } from "@component/Search/Animal/SearchAnimalModal";
import styled from "@emotion/styled";
import { Button, Input, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export const SearchAnimalFilterModal = ({ children }: PropsWithChildren) => {
  const { isShow, openModal, closeModal } = useControlModal();
  return (
    <>
      {isShow && (
        <CommonModal
          closeModal={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <S.Container>
            <S.Top>
              <Center styles={{ horizontalAlign: "start", gap: "181px" }}>
                <Typography fontSize={26} fontWeight={500}>
                  필터
                </Typography>
                <Input placeholder="원하시는 견종을 입력해 주세요." />
              </Center>
            </S.Top>

            <S.Content>
              <Column styles={{ gap: "34px" }}>
                <Column styles={{ horizontalAlign: "start", gap: "16px" }}>
                  <Typography fontSize={20} fontWeight={500}>
                    브리더 인증 여부
                  </Typography>
                  <Center styles={{ gap: "16px", horizontalAlign: "start" }}>
                    <Button variant="contained" size="large">
                      전체
                    </Button>
                    <Button variant="outlined" size="large">
                      인증 O
                    </Button>
                  </Center>
                </Column>

                <Column styles={{ horizontalAlign: "start", gap: "16px" }}>
                  <Typography fontSize={20} fontWeight={500}>
                    분양 가능 여부
                  </Typography>
                  <Center styles={{ gap: "16px", horizontalAlign: "start" }}>
                    <Button variant="contained" size="large">
                      전체
                    </Button>
                    <Button variant="outlined" size="large">
                      분양 가능 강아지
                    </Button>
                  </Center>
                </Column>

                <Column styles={{ horizontalAlign: "start", gap: "16px" }}>
                  <Typography fontSize={20} fontWeight={500}>
                    성별
                  </Typography>
                  <Center styles={{ gap: "16px", horizontalAlign: "start" }}>
                    <Button variant="contained" size="large">
                      전체
                    </Button>
                    <Button variant="outlined" size="large">
                      수컷
                    </Button>
                    <Button variant="outlined" size="large">
                      암컷
                    </Button>
                  </Center>
                </Column>

                <Column styles={{ horizontalAlign: "start", gap: "16px" }}>
                  <Typography fontSize={20} fontWeight={500}>
                    크기
                  </Typography>
                  <Center styles={{ gap: "16px", horizontalAlign: "start" }}>
                    <Button variant="contained" size="large">
                      전체
                    </Button>
                    <Button variant="outlined" size="large">
                      초소형
                    </Button>
                    <Button variant="outlined" size="large">
                      소형
                    </Button>
                    <Button variant="outlined" size="large">
                      중형
                    </Button>
                    <Button variant="outlined" size="large">
                      대형
                    </Button>
                    <Button variant="outlined" size="large">
                      그 외
                    </Button>
                  </Center>
                </Column>
              </Column>
            </S.Content>

            <S.Bottom>
              <Center styles={{ gap: "20px" }}>
                <Button variant="contained" size="large" sx={{ width: 240 }}>
                  검색
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ width: 240 }}
                  onClick={closeModal}
                >
                  취소
                </Button>
              </Center>
            </S.Bottom>
          </S.Container>
        </CommonModal>
      )}
      <span onClick={openModal}>{children}</span>
    </>
  );
};

const S = {
  Top: styled.header`
    margin-bottom: 66px;
  `,
  Content: styled.div``,
  Bottom: styled.div`
    margin-top: 82px;
  `,
  Container: styled.div`
    padding: 86px 112px;
    background-color: white;
    border-radius: 32px;
  `,
};
