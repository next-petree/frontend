import { Button, Typography } from "@mui/material";
import { useState, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { Image, PartialImageProps } from "@component/0min/Image";
import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { WrapButton } from "@component/0min/WrapButton";
import { CommonModal } from "@component/0min/CommonModal";

import CircleXSVG from "@assets/0min/circle_x.svg";
import DogPNG from "@assets/0min/dog.png";

// TODO: 임시 hook
export const useControlModal = () => {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    openModal: () => setIsShow(true),
    closeModal: () => setIsShow(false),
  } as const;
};

export const SearchAnimalModal = ({ children }: PropsWithChildren) => {
  const { isShow, openModal, closeModal } = useControlModal();

  return (
    <>
      {isShow && (
        <SearchAnimalDetailModal closeModal={closeModal}>
          <SearchAnimalDetailModal.ImageContainer>
            <SearchAnimalDetailModal.MainImage
              src={DogPNG}
              alt="dog"
              dimmedText="예약 중"
            />
            <SearchAnimalDetailModal.ImageTrack>
              <SearchAnimalDetailModal.SubImage src={DogPNG} alt="dog" />
              <SearchAnimalDetailModal.SubImage src={DogPNG} alt="dog" />
              <SearchAnimalDetailModal.SubImage src={DogPNG} alt="dog" />
            </SearchAnimalDetailModal.ImageTrack>
          </SearchAnimalDetailModal.ImageContainer>

          <Column
            styles={{
              horizontalAlign: "start",
              verticalAlign: "space-between",
            }}
          >
            <SearchAnimalDetailModal.Wrap>
              <SearchAnimalDetailModal.ContentTitle>
                루카스
              </SearchAnimalDetailModal.ContentTitle>
              <SearchAnimalDetailModal.Line />
              <SearchAnimalDetailModal.Information>
                <SearchAnimalDetailModal.ContentText>
                  견종 : 견종 : 견종 : 견종 : 견종 : 견종 : 견종 : 견종 : 견종 :
                  견종 : 견종 : 견종 : 견종 : 견종 : 견종 : 견종 : 견종 : 견종 :
                  견종 : 견종 : 견종 :
                </SearchAnimalDetailModal.ContentText>
                <SearchAnimalDetailModal.ContentText>
                  성별 : 성별 : 성별 : 성별 : 성별 : 성별 : 성별 :
                </SearchAnimalDetailModal.ContentText>
                <SearchAnimalDetailModal.ContentText>
                  출생일 : 출생일 : 출생일 : 출생일 : 출생일 : 출생일 : 출생일 :
                </SearchAnimalDetailModal.ContentText>
                <SearchAnimalDetailModal.ContentText>
                  브리더명 : 브리더명 : 브리더명 : 브리더명 : 브리더명 :
                  브리더명 : 브리더명 :
                </SearchAnimalDetailModal.ContentText>
              </SearchAnimalDetailModal.Information>
              <SearchAnimalDetailModal.Line />
            </SearchAnimalDetailModal.Wrap>

            <Button variant="contained" size="large">
              예약하기
            </Button>
          </Column>

          <SearchAnimalDetailModal.DetailContentContaier>
            <SearchAnimalDetailModal.ContentSubTitle>
              상세설명
            </SearchAnimalDetailModal.ContentSubTitle>
            <SearchAnimalDetailModal.DetailContent>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
              <Typography>
                온순한 시바견입니다. 2살 정도 되었고 활달하고 강아지 껌을
                좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.
              </Typography>
            </SearchAnimalDetailModal.DetailContent>
          </SearchAnimalDetailModal.DetailContentContaier>
        </SearchAnimalDetailModal>
      )}
      <span onClick={openModal}>{children}</span>
    </>
  );
};

interface SearchAnimalDetailModalContainerProps extends PropsWithChildren {
  closeModal: () => void;
}

const SearchAnimalDetailModalContainer = ({
  children,
  closeModal,
}: SearchAnimalDetailModalContainerProps) => {
  return (
    <CommonModal closeModal={closeModal}>
      <S.Grid>
        {children}
        <ModalCloseButton closeModal={closeModal} />
      </S.Grid>
    </CommonModal>
  );
};

const SearchAnimalDetailModalImageContainer = ({
  children,
}: PropsWithChildren) => {
  return (
    <Column
      styles={{ horizontalAlign: "start", verticalAlign: "space-between" }}
    >
      {children}
    </Column>
  );
};

interface SearchAnimalDetailModalMainImageProps extends PartialImageProps {
  dimmedText: string;
}
const SearchAnimalDetailModalMainImage = ({
  src,
  alt,
  width = 278,
  height = 278,
  dimmedText,
}: SearchAnimalDetailModalMainImageProps) => {
  if (dimmedText) {
    return (
      <S.DimmedContainer>
        {dimmedText && (
          <S.Dimmed>
            <Typography color={"white"} fontSize={27} fontWeight={700}>
              {dimmedText}
            </Typography>
          </S.Dimmed>
        )}
        <Image src={src} alt={alt} width={width} height={height}></Image>
      </S.DimmedContainer>
    );
  }
  return <Image src={src} alt={alt} width={width} height={height} />;
};

const SearchAnimalDetailModalSubImage = ({
  src,
  alt,
  width = 50,
  height = 50,
}: PartialImageProps) => {
  return (
    <S.SearchAnimalDetailModalSubImageWrap>
      <Image src={src} alt={alt} width={width} height={height} />
    </S.SearchAnimalDetailModalSubImageWrap>
  );
};

const SearchAnimalDetailModalImageTrack = ({ children }: PropsWithChildren) => {
  return (
    <Center styles={{ gap: "26px", horizontalAlign: "start" }}>
      {children}
    </Center>
  );
};

const SearchAnimalDetailModalContentTitle = ({
  children,
}: PropsWithChildren) => {
  return (
    <Typography
      component="h3"
      textAlign={"start"}
      sx={{ marginBottom: "12px" }}
    >
      {children}
    </Typography>
  );
};
const SearchAnimalDetailModalContentSubTitle = ({
  children,
}: PropsWithChildren) => {
  return (
    <Typography component="h4" sx={{ marginBottom: "12px" }}>
      {children}
    </Typography>
  );
};

const SearchAnimalDetailModalContentText = ({
  children,
}: PropsWithChildren) => {
  return (
    <Typography width={"100%"} noWrap textAlign={"start"}>
      {children}
    </Typography>
  );
};

const ModalCloseButton = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <S.CloseButtonAbsolute>
      <WrapButton onClick={closeModal}>
        <Image src={CircleXSVG} alt={"x"} width={44} height={44} />
      </WrapButton>
    </S.CloseButtonAbsolute>
  );
};

const fadeInKeyframs = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const S = {
  Background: styled.section`
    z-index: 2000;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    animation-name: ${fadeInKeyframs};
    animation-duration: 0.3s;
  `,
  Grid: styled.div`
    position: relative;
    display: grid;
    box-sizing: border-box;
    row-gap: 37px;
    column-gap: 20px;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1.2fr) minmax(0, 1fr);

    width: 880px;
    max-width: 880px;
    max-height: 90vh;
    padding: 88px;

    border-radius: 32px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
  `,
  Line: styled.div`
    box-sizing: border-box;
    background-color: red;
    height: 1px;
    width: 100%;
  `,
  Content: styled.div`
    padding: 20px 0px 20px 0px;
    text-align: left;
  `,
  DetailContentContaier: styled.div`
    text-align: left;
    grid-column: span 2;
  `,

  DetailContent: styled.div`
    box-sizing: border-box;
    padding: 20px;
    max-height: 100%;
    overflow: auto;
  `,
  Information: styled.div`
    width: 100%;

    padding: 20px 0px 20px 0px;
  `,
  CloseButtonAbsolute: styled.div`
    position: absolute;
    top: -22px;
    right: -22px;
  `,
  SearchAnimalDetailModalSubImageWrap: styled.div`
    border-radius: 12px;
    overflow: hidden;
  `,
  DimmedContainer: styled.div`
    position: relative;
    border-radius: 18px;
    overflow: hidden;
  `,
  Dimmed: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  `,
  Wrap: styled.div`
    width: 100%;
  `,
};

export const SearchAnimalDetailModal = Object.assign(
  SearchAnimalDetailModalContainer,
  {
    ImageTrack: SearchAnimalDetailModalImageTrack,
    ImageContainer: SearchAnimalDetailModalImageContainer,
    MainImage: SearchAnimalDetailModalMainImage,
    SubImage: SearchAnimalDetailModalSubImage,
    ContentTitle: SearchAnimalDetailModalContentTitle,
    ContentSubTitle: SearchAnimalDetailModalContentSubTitle,
    ContentText: SearchAnimalDetailModalContentText,
    Line: S.Line,
    DetailContentContaier: S.DetailContentContaier,
    DetailContent: S.DetailContent,
    Information: S.Information,
    Wrap: S.Wrap,
    CloseButton: ModalCloseButton,
  },
);
