import React from "react";

import {
  Background,
  Container,
  TitleArea,
  Title,
  InfoWrap,
  DogImage,
  RightContent,
  TopContent,
  DogName,
  DogType,
  DogGender,
  DogBirthDay,
  BottomContent,
  BreederName,
  BreederPhoneNumber,
  BreederLocation,
  ButtonWrap,
  CloseButton,
} from "./Style";

type ModalDataType = {
  imgUrl: string;
  name: string;
  breedType: string;
  gender: string;
  birthDate: string;
  breederPhoneNumber: string;
  breederAddress: string;
  breederName: string;
};

type AdopterRowModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  data: ModalDataType | null;
};

const AdopterRowModal = ({
  showModal,
  setShowModal,
  data,
}: AdopterRowModalProps) => {
  if (!showModal || !data) return null;

  return (
    <Background>
      <Container>
        <TitleArea>
          <Title>신청내역</Title>
        </TitleArea>
        <InfoWrap>
          <DogImage src={data.imgUrl} alt={data.name} />
          <RightContent>
            <TopContent>
              <DogName>{data.name}</DogName>
              <DogType>견종: {data.breedType}</DogType>
              <DogGender>
                성별: {data.gender === "MALE" ? "수컷" : "암컷"}
              </DogGender>
              <DogBirthDay>출생일: {data.birthDate}</DogBirthDay>
            </TopContent>
            <BottomContent>
              <BreederName>브리더: {data.breederName}</BreederName>
              <BreederPhoneNumber>
                연락처: {data.breederPhoneNumber}
              </BreederPhoneNumber>
              <BreederLocation>활동지역: {data.breederAddress}</BreederLocation>
            </BottomContent>
          </RightContent>
        </InfoWrap>
        <ButtonWrap>
          <CloseButton onClick={() => setShowModal(false)}>확인</CloseButton>
        </ButtonWrap>
      </Container>
    </Background>
  );
};

export default AdopterRowModal;
