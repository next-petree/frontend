import * as S from "./IntroductionStyle";
import MainBreed from "./BreederPublicProfile/MainBreed";
import ResidentialEnvironment from "./AdopterPublicProfile/ResidentialEnvironment";

interface IntroductionProps {
  showMainBreed: boolean;
}

const Introduction: React.FC<IntroductionProps> = ({ showMainBreed }) => {
  const DummyData = {
    userInfo: {
      name: "김브리더",
      address: " 경상남도 창원시 의창구",
    },
    introduction: {
      hashTags: [
        "강아지에 진심",
        "반려견 기초지식 통과자",
        "반려견은 나의 가족",
      ],
      headLine: "강아지를 키우는 것에 있어 진심인 남자",
    },
  };

  return (
    <S.Container>
      <S.UserInfo>
        <S.UserImage />
        <S.UserName>{DummyData.userInfo.name}</S.UserName>
        <S.UserAddress>
          <span>활동지역</span>
          <span>{DummyData.userInfo.address}</span>
        </S.UserAddress>
      </S.UserInfo>
      <S.Introduce>
        <S.IntroductionText>자기소개</S.IntroductionText>
        <S.HashTagsContainer>
          {DummyData.introduction.hashTags.map((hashTag, index) => (
            <S.HashTag key={index}>#{hashTag}</S.HashTag>
          ))}
        </S.HashTagsContainer>
        <S.HeadLine>{DummyData.introduction.headLine}</S.HeadLine>
      </S.Introduce>
      {showMainBreed ? <MainBreed /> : <ResidentialEnvironment />}
    </S.Container>
  );
};

export default Introduction;
