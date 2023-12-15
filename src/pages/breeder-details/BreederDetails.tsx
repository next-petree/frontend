import { useState } from "react";

import * as S from "./styles";
import PrimaryButton from "../../component/Button/PrimaryButton";
import DogCard from "../../component/Card/DogCard";
import WhiteBox from "../../component/WhiteBox/WhiteBox";
import CustomLayout from "../Layout/CustomLayout";
import DetailModal from "../../component/DetailModal/DetailModal";
import CustomAvatar from "../../component/Avatar/CustomAvatar";

import { useGetBreederDetailQuery } from "../../../redux/api/breederApiSlice";
import { useParams } from "react-router-dom";

const BreederDetails = () => {
  const { id } = useParams();
  const [isModalOpenClicked, setIsModalOpenClicked] = useState(false);
  const [selectedDogId, setSelectedDogId] = useState<number>();

  const {
    data: breeder,
    isLoading: loadingBreeder,
    isError,
  } = useGetBreederDetailQuery(id);

  const handleDetailbuttonClick = (dogId: number) => {
    setSelectedDogId(dogId);
    setIsModalOpenClicked(true);
  };

  return (
    <CustomLayout height={2040}>
      <S.Frame62>
        <S.Frame122>
          <S.Frame178>
            <S.Frame178_1>
              <S.IconContainer>
                {breeder?.data?.profileImgUrl ? (
                  breeder?.data?.verified ? (
                    <CustomAvatar
                      isQualifiedBreeder
                      imgSrc={breeder?.data?.profileImgUrl}
                    />
                  ) : (
                    <CustomAvatar imgSrc={breeder?.data?.profileImgUrl} />
                  )
                ) : breeder?.data?.verified ? (
                  <CustomAvatar isQualifiedBreeder />
                ) : (
                  <CustomAvatar />
                )}
              </S.IconContainer>
            </S.Frame178_1>
            <S.Name>{breeder?.data?.nickname}</S.Name>
          </S.Frame178>
          <S.AddressContainer>
            <p>활동지역</p>
            <p>{breeder?.data?.address1}</p>
          </S.AddressContainer>
          <S.Frame179>
            <S.IntroHeading>자기소개</S.IntroHeading>
            <S.ButtonGroup>
              <PrimaryButton>#강아지에 진심</PrimaryButton>
              <PrimaryButton>#반려견 기초지식 테스트 통과자</PrimaryButton>
              <PrimaryButton>#반려견은 나의 가족</PrimaryButton>
            </S.ButtonGroup>
            {breeder?.data?.selfIntroduction ? (
              <S.DescContainer>
                {breeder?.data?.selfIntroduction}
              </S.DescContainer>
            ) : (
              <S.DescContainer>
                안녕하세요! 강아지를 키우는 것에 있어 진심인 학생입니다.{"\n"}
                새로운 반려견을 분양받으면 먼저 분양을 받은 강아지와 함께 성심을
                다하여 잘 키우겠습니다.
              </S.DescContainer>
            )}
          </S.Frame179>
        </S.Frame122>
        <S.Frame113>
          <S.TitleContainer>주력견종</S.TitleContainer>
          <S.MainDogContainer>
            {!loadingBreeder &&
              breeder?.data?.mainBreedDtoResponseList.map((dog: any) => (
                <S.MainDog key={dog.id}>
                  <S.CustomImage src={dog.imgUrl} alt={dog.name} />
                  <S.MainDogName>{dog.name}</S.MainDogName>
                </S.MainDog>
              ))}
          </S.MainDogContainer>
        </S.Frame113>
      </S.Frame62>
      <WhiteBox width={1060} height={780} top={284} left={390}></WhiteBox>
      <WhiteBox width={1060} height={854} top={1114} left={390}>
        <S.Frame63>
          <S.Title>보유견종</S.Title>
          <S.FlexBox>
            {!loadingBreeder &&
              breeder?.data?.simpleDogDtos.map((dog: any) => (
                <DogCard
                  key={dog.id}
                  src={dog.imgUrl}
                  name={dog.name}
                  species={dog.type}
                  DOB={dog.birthDate}
                  status={dog.status}
                  onClick={() => handleDetailbuttonClick(dog.id)}
                />
              ))}
          </S.FlexBox>
        </S.Frame63>
      </WhiteBox>

      {/* id를 넘겨주기 */}
      {isModalOpenClicked && (
        <S.ModalContainer>
          <DetailModal
            customTop="1090px"
            customLeft="520px"
            dogId={selectedDogId}
            onClick={() => setIsModalOpenClicked(false)}
          />
        </S.ModalContainer>
      )}
    </CustomLayout>
  );
};

export default BreederDetails;
