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
      {/* <IntroArea4></IntroArea4>
      <IntroArea5></IntroArea5> */}
    </Container>
  );
};

export default IntroContent;
