import { AiFillCloseCircle } from "react-icons/ai";

import { IDMProps } from "../../types";
import { useGetDogDetailQuery } from "../../features/api/dogApiSlice";
import * as S from "./styles";

const DetailModal = ({ dogId, onClick }: IDMProps) => {
  const { data: dog } = useGetDogDetailQuery(dogId);

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.DetailInfoFlexBox>
          <S.DogImage src={dog?.data.imagesUrl[0]} alt={dog?.name} />
          <S.DetailInfoContainer>
            <S.NameContainer>{dog?.data.name}</S.NameContainer>
            <S.DetailInfo>
              <S.DetailInfoText>견종: {dog?.data.type}</S.DetailInfoText>
              <S.DetailInfoText>성별: {dog?.data.gender}</S.DetailInfoText>
              <S.DetailInfoText>출생일: {dog?.data.birthDate}</S.DetailInfoText>
              <S.DetailInfoText>
                브리더명: {dog?.data.breederNickName}
              </S.DetailInfoText>
            </S.DetailInfo>
          </S.DetailInfoContainer>
        </S.DetailInfoFlexBox>
        <S.DetailInfoFlexBox>
          <S.DogImageGroup>
            {dog?.data.imagesUrl.map((img: string, index: number) => (
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
          <S.Button>예약하기</S.Button>
        </S.DetailInfoFlexBox>
        <S.DetailDescContainer>
          <S.DetailDescTitle>상세설명</S.DetailDescTitle>
          <S.DetailDesc>{dog?.data.management}</S.DetailDesc>
        </S.DetailDescContainer>
      </S.ModalContainer>
      <S.ClosebtnContainer onClick={onClick}>
        <AiFillCloseCircle style={{ width: "44px", height: "44px" }} />
      </S.ClosebtnContainer>
    </S.ModalWrapper>
  );
};

export default DetailModal;
