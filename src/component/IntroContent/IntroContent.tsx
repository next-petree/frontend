import React from "react";
import {
  Container,
  IntroArea1,
  TitleLogo,
  TitleTextLogo,
  IntroArea2,
  IntroArea2DogImage,
  IntroArea2TextArea,
  IntroArea2MainTitle,
  IntroArea2SubTitle1,
  IntroArea2SubTitle2,
  IntroArea2Introduce,
  IntroArea3,
  IntroArea3ContentBox,
  IntroArea3MainTitle,
  IntroArea3SubTitle,
  IntroArea3Introduce,
  IntroArea4,
  IntroArea4MainTitle,
  IntroArea4SubTitle,
  ImageContainer,
  LeftContent,
  LeftImage,
  LeftHashTag,
  LeftImageIntroduce,
  RightContent,
  RightImage,
  RightHashTag,
  RightImageIntroduce,
  IntroArea5,
  IntroArea5MainTitle,
  IntroArea5SubTitle,
  IntroArea5HashTagArea,
  HashTagArea,
  HashTag1,
  HashTag2,
  HashTag3,
  HashTag4,
  HashTag5,
} from "./IntroContentStyle";

const IntroContent = () => {
  return (
    <Container>
      <IntroArea1>
        <TitleLogo />
        <TitleTextLogo />
      </IntroArea1>

      <IntroArea2>
        <IntroArea2DogImage />
        <IntroArea2TextArea>
          <IntroArea2MainTitle>
            완전히 새로운 서비스
            <br /> 브리더와 분양자를 이어줍니다
          </IntroArea2MainTitle>
          <IntroArea2SubTitle1>
            또 하나의 가족이 될 반려견과 분양희망자를 위해 노력합니다
          </IntroArea2SubTitle1>
          <IntroArea2SubTitle2>브리더란?</IntroArea2SubTitle2>
          <IntroArea2Introduce>
            우수한 견종보존을 위해 동물보호 의식과 견종표준의 이해를 기반으로
            견종의
            <br /> 짝짓기, 출산, 질병, 위생 자견분양 등 번식에 전문적인 지식을
            갖추어
            <br /> 강아지나 고양이의 혈통을 유지하고 올바르게 번식해 애견문화
            발전에 기여합니다
          </IntroArea2Introduce>
        </IntroArea2TextArea>
      </IntroArea2>

      <IntroArea3>
        <IntroArea3ContentBox>
          <IntroArea3MainTitle>펫트리</IntroArea3MainTitle>
          <IntroArea3SubTitle>Team Mission</IntroArea3SubTitle>
          <IntroArea3Introduce>
            펫트리팀은 반려견과 분양희망자를 좀 더 원활히 이어줄 수 있도록
            <br />
            도와주자는 일념하에 구성되었습니다 <br />
            반려견의 속마음을 잘 아는 브리더, 반려견을 케어해 줄<br />
            분양희망자를 모집합니다
          </IntroArea3Introduce>
        </IntroArea3ContentBox>
      </IntroArea3>

      <IntroArea4>
        <IntroArea4MainTitle>
          새로운 당신의 가족,
          <br /> 반려동물을 맞이하세요!
        </IntroArea4MainTitle>
        <IntroArea4SubTitle>
          사랑스러운 반려견을 따뜻한 가족의 품으로 함께 동참하세요!
        </IntroArea4SubTitle>

        <ImageContainer>
          <LeftContent>
            <LeftImage>
              <LeftHashTag>#브리더</LeftHashTag>
            </LeftImage>
            <LeftImageIntroduce>
              반려견의 속마음을
              <br />잘 아는 브리더
            </LeftImageIntroduce>
          </LeftContent>
          <RightContent>
            <RightImage>
              <RightHashTag>#분양희망자</RightHashTag>
            </RightImage>
            <RightImageIntroduce>
              반려견을 잘 케어해 줄<br />
              분양희망자
            </RightImageIntroduce>
          </RightContent>
        </ImageContainer>
      </IntroArea4>

      <IntroArea5>
        <IntroArea5MainTitle>
          펫트리와 함께,
          <br />
          분양 서비스를 시작하세요!
        </IntroArea5MainTitle>
        <IntroArea5SubTitle>
          섬세한 브리더의 손길로 탄생한 반려견과 함께하세요!
        </IntroArea5SubTitle>
        <IntroArea5HashTagArea>
          <HashTagArea>
            <HashTag1>#펫트리</HashTag1>
            <HashTag2>#브리더</HashTag2>
            <HashTag3>#반려동물</HashTag3>
          </HashTagArea>
          <HashTagArea>
            <HashTag4>#댕댕이</HashTag4>
            <HashTag5>#가족</HashTag5>
          </HashTagArea>
        </IntroArea5HashTagArea>
      </IntroArea5>
    </Container>
  );
};

export default IntroContent;
