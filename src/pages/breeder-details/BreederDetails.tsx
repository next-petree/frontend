import * as S from "./styles";
import { IMG2, IMG3, IMG4, IMG5 } from "../../assets/images";
import DogCard from "../../component/Card/DogCard";
import WhiteBox from "../../component/WhiteBox/WhiteBox";
import CustomLayout from "../layout/CustomLayout";

const BreederDetails = () => {
  return (
    <CustomLayout height={2040}>
      <S.Frame62>
        <S.Frame122>
          <S.Frame178>
            <S.Frame178_1>
              <S.IconContainer>
                <img src={IMG2} alt="" />
              </S.IconContainer>
            </S.Frame178_1>
            <S.Name>김브리더</S.Name>
            <S.AddressContainer>
              <p>활동지역</p>
              <p>경상남도 창원시 의창구</p>
            </S.AddressContainer>
          </S.Frame178>
          <S.Frame179>
            <S.IntroHeading>자기소개</S.IntroHeading>
            <S.ButtonGroup>
              <S.Button>#강아지에 진심</S.Button>
              <S.Button>#반려견 기초지식 테스트 통과자</S.Button>
              <S.Button>#반려견은 나의 가족</S.Button>
            </S.ButtonGroup>
            <S.DescContainer>
              안녕하세요! 강아지를 키우는 것에 있어 진심인 학생입니다. 새로운
              반려견을 분양받으면 먼저 분양을 받은 강아지와 함께 성심을 다하여
              잘 키우겠습니다.
            </S.DescContainer>
          </S.Frame179>
        </S.Frame122>
        <S.Frame113>
          <S.TitleContainer>주력견종</S.TitleContainer>
          <S.MainDogContainer>
            <S.MainDog>
              <img src={IMG3} />
              <S.MainDogName>포메라니안</S.MainDogName>
            </S.MainDog>
            <S.MainDog>
              <img src={IMG3} />
              <S.MainDogName>포메라니안</S.MainDogName>
            </S.MainDog>
            <S.MainDog>
              <img src={IMG3} />
              <S.MainDogName>포메라니안</S.MainDogName>
            </S.MainDog>
          </S.MainDogContainer>
        </S.Frame113>
      </S.Frame62>
      <WhiteBox width={1060} height={780} top={284}></WhiteBox>
      <WhiteBox width={1060} height={854} top={1114}>
        <S.Frame63>
          <S.Title>보유견종</S.Title>
          <S.FlexBox>
            <DogCard
              src={IMG4}
              name="루카스"
              species="포메라니안"
              DOB="2023.05.23"
              status="분양완료"
            />
            <DogCard
              src={IMG5}
              name="아미"
              species="골든리트리버"
              DOB="2022.06.13"
              status="예약중"
            />
            <DogCard
              src={IMG5}
              name="아미"
              species="골든리트리버"
              DOB="2022.06.13"
              status="분양완료"
            />
            <DogCard
              src={IMG4}
              name="루카스"
              species="포메라니안"
              DOB="2023.05.23"
            />
            <DogCard
              src={IMG5}
              name="아미"
              species="골든리트리버"
              DOB="2022.06.13"
            />
            <DogCard
              src={IMG5}
              name="아미"
              species="골든리트리버"
              DOB="2022.06.13"
            />
          </S.FlexBox>
        </S.Frame63>
      </WhiteBox>
    </CustomLayout>
  );
};

export default BreederDetails;
