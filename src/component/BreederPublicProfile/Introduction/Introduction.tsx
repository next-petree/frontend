import { Container } from "@mui/material";
import * as S from "./IntroductionStyle";

const Introduction = () => {
  return (
    <S.Container>
      <S.UserInfo>
        <S.UserImage />
        <S.UserName>김브리더</S.UserName>
        <S.UserAddress>활동지역 경상남도 창원시 의창구</S.UserAddress>
      </S.UserInfo>
      <S.Introduce>
        <S.IntroductionText>자기소개</S.IntroductionText>
        <S.HashTag>#안녕</S.HashTag>
        <S.HeadLine>강아지를 키우는 것에 있어 진심인 남자</S.HeadLine>
      </S.Introduce>
      <S.MainBreed>
        <S.MainBreedText>주력견종</S.MainBreedText>
        <S.DogProfileContainer>
          <S.DogImage />
          <S.DogName>포메라니안</S.DogName>
        </S.DogProfileContainer>
      </S.MainBreed>
    </S.Container>
  );
};

export default Introduction;
