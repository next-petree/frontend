import { Container } from "@mui/material";
import * as S from "./IntroductionStyle";

const Introduction = () => {
  const data = {
    userInfo: {
      name: "김브리더",
      address: " 경상남도 창원시 의창구",
    },
    introduction: {
      text: "자기소개",
      hashTags: [
        "강아지에 진심",
        "반려견 기초지식 통과자",
        "반려견은 나의 가족",
      ],
      headLine: "강아지를 키우는 것에 있어 진심인 남자",
    },
    mainBreed: {
      text: "주력견종",
      dogProfiles: ["포메라니안", "치와와", "골든리트리버"],
    },
  };

  return (
    <S.Container>
      <S.UserInfo>
        <S.UserImage />
        <S.UserName>{data.userInfo.name}</S.UserName>
        <S.UserAddress>
          <span>활동지역</span>
          <span>{data.userInfo.address}</span>
        </S.UserAddress>
      </S.UserInfo>
      <S.Introduce>
        <S.IntroductionText>{data.introduction.text}</S.IntroductionText>
        <S.HashTagsContainer>
          {data.introduction.hashTags.map((hashTag, index) => (
            <S.HashTag key={index}>#{hashTag}</S.HashTag>
          ))}
        </S.HashTagsContainer>
        <S.HeadLine>{data.introduction.headLine}</S.HeadLine>
      </S.Introduce>
      <S.MainBreed>
        <S.MainBreedText>{data.mainBreed.text}</S.MainBreedText>
        <S.DogProfileContainer>
          {data.mainBreed.dogProfiles.map((dog, index) => (
            <S.DogProfile key={index}>
              <S.DogImage />
              <S.DogName>{dog}</S.DogName>
            </S.DogProfile>
          ))}
        </S.DogProfileContainer>
      </S.MainBreed>
    </S.Container>
  );
};

export default Introduction;
