import { useState } from "react";

import * as S from "./Styles1";
import PrimaryButton from "../../component/Button/PrimaryButton";
import DogCard from "../../component/Card/DogCard";
// import WhiteBox from "../../component/WhiteBox/WhiteBox";
import CustomLayout from "../Layout/CustomLayout";
import DetailModal from "../../component/DetailModal/DetailModal";
import CustomAvatar from "../../component/Avatar/CustomAvatar";

import { useGetBreederDetailQuery } from "../../redux/api/BreederApiSlice1";
import { useParams } from "react-router-dom";
import { IDog } from "../../types";

interface IBreederDetailsProps {
  id: number;
  imgUrl: string;
  name: string;
}

interface IDogData {
  id: number;
  address1: string;
  mainBreedDtoResponseList: IBreederDetailsProps[];
  nickname: string;
  profileImgUrl: string;
  selfIntroduction: string;
  simpleDogDtos: IDog[];
  verified: boolean;
}

interface IBreederProps {
  status: string;
  data: IDogData;
}

interface IProps {
  data: IBreederProps;
  isLoading: boolean;
  isError: boolean;
}

const BreederDetails = () => {
  const { id } = useParams();
  const [isModalOpenClicked, setIsModalOpenClicked] = useState(false);
  const [selectedDogId, setSelectedDogId] = useState<number>();

  const {
    data: breeder,
    isLoading: loadingBreeder,
    isError,
  } = useGetBreederDetailQuery<IProps>(id);
  

  const handleDetailbuttonClick = (dogId: number) => {
    setSelectedDogId(dogId);
    setIsModalOpenClicked(true);
  };

  return (
    <CustomLayout height={2040}>
      <S.Wrapper>
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
        <S.WhiteBox1>
          <S.Name>{breeder?.data?.nickname}</S.Name>
          <S.AddressContainer>
              <p>활동지역</p>
              <p>{breeder?.data?.address1}</p>
           </S.AddressContainer>

           <S.IntroContainer>
            <S.Title>자기소개</S.Title>
            <S.ButtonContainer>
              <PrimaryButton>#강아지에 진심</PrimaryButton>
              <PrimaryButton>#반겨련 기초지식 테스트 통과자</PrimaryButton>
              <PrimaryButton>#반려견은 나의 가족</PrimaryButton>
            </S.ButtonContainer>
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
           </S.IntroContainer>
           <S.MainDogContainer>
            <S.Title>주력견종</S.Title>
            <S.MainDogImgContainer>
             {!loadingBreeder &&
              breeder?.data?.mainBreedDtoResponseList.map((dog: IBreederDetailsProps) => (
                <S.MainDog key={dog.id}>
                  <S.CustomImage src={dog.imgUrl} alt={dog.name} />
                  <S.MainDogName>{dog.name}</S.MainDogName>
                </S.MainDog>
              ))}
          </S.MainDogImgContainer>
           </S.MainDogContainer>
        </S.WhiteBox1>
        <S.WhiteBox2>
          <S.OwnDogTitle>보유견종</S.OwnDogTitle>
          <S.OwnDogImgFlexBox>
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
          </S.OwnDogImgFlexBox>
        </S.WhiteBox2>
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
      </S.Wrapper>
    </CustomLayout>
  );
};

export default BreederDetails;