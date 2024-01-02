import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import React from "react";
import { BreederBadge } from "../../assets/icons";
import { IDMProps } from "../../types";
import { useGetDogDetailQuery } from "../../redux/api/DogApiSlice1";
import * as S from "./Styles1";

const DetailModal = ({ customTop, customLeft, dogId, onClick }: IDMProps) => {
  const { data: dog } = useGetDogDetailQuery(dogId);

  const navigate = useNavigate();

  console.log(dog);

  const handleReservationClick = () => {
    navigate("/breeding-register", { state: dog });
  };

  return (
    <S.ModalWrapper customtop={customTop} customleft={customLeft}>
      <S.ModalContainer>
        <S.DetailInfoFlexBox>
          <S.DogImage src={dog?.data?.imagesUrl[0]} alt={dog?.data.name} />
          <S.DetailInfoContainer>
            <S.NameContainer>{dog?.data?.name}</S.NameContainer>
            <S.DetailInfo>
              <S.DetailInfoText>견종: {dog?.data?.type}</S.DetailInfoText>
              <S.DetailInfoText>성별: {dog?.data?.gender}</S.DetailInfoText>
              <S.DetailInfoText>
                출생일: {dog?.data?.birthDate}
              </S.DetailInfoText>
              <S.DetailInfoText>
                브리더명: {dog?.data?.breederNickName}
              </S.DetailInfoText>
              {dog?.data?.isBreederVerified && (
                <S.DetailInfoText>
                  <BreederBadge width="24" height="24" /> 인증된 브리더
                </S.DetailInfoText>
              )}
            </S.DetailInfo>
          </S.DetailInfoContainer>
        </S.DetailInfoFlexBox>
        <S.DetailInfoFlexBox>
          <S.DogImageGroup>
            {dog?.data?.imagesUrl.map((img: string, index: number) => (
              <S.SmallDogImageBox key={index}>
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </S.SmallDogImageBox>
            ))}
          </S.DogImageGroup>

          <S.Button
            onClick={handleReservationClick}
            disabled={dog?.data?.status !== "AVAILABLE"}
          >
            예약하기
          </S.Button>
        </S.DetailInfoFlexBox>
        <S.DetailDescContainer>
          <S.DetailDescTitle>상세설명</S.DetailDescTitle>
          <S.DetailDesc>{dog?.data?.management}</S.DetailDesc>
        </S.DetailDescContainer>
      </S.ModalContainer>
      <S.ClosebtnContainer onClick={onClick}>
        <AiFillCloseCircle style={{ width: "44px", height: "44px" }} />
      </S.ClosebtnContainer>
    </S.ModalWrapper>
  );
};

export default DetailModal;
