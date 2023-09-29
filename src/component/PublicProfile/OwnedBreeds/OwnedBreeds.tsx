import * as S from "./OwnedBreedsStyle";

const OwnedBreeds = () => {
  const dummyData = [
    { id: 1, breed: "포메라니안", name: "루카스", birthDay: "2023.09.26" },
    { id: 2, breed: "시츄", name: "맥스", birthDay: "2023.05.12" },
    { id: 3, breed: "비글", name: "벨라", birthDay: "2022.12.09" },
    { id: 4, breed: "진돗개", name: "모카", birthDay: "2023.01.03" },
    { id: 5, breed: "삽살개", name: "초코", birthDay: "2022.07.21" },
    { id: 6, breed: "골든 리트리버", name: "리오", birthDay: "2022.02.18" },
  ];
  return (
    <S.Container>
      <S.ContentBox>
        <S.OwnedBreedsText>보유견종</S.OwnedBreedsText>
        <S.ListContainer>
          {dummyData.map(dog => (
            <S.OwnedBreedsList key={dog.id}>
              <S.DogImage />
              <S.DogTextInfomation>
                <S.DogType>
                  <span>견종:</span>
                  <span>{dog.breed}</span>
                </S.DogType>
                <S.DogName>
                  <span>이름:</span>
                  <span>{dog.name}</span>
                </S.DogName>
                <S.DogBirthDay>
                  <span>출생일:</span>
                  <span>{dog.birthDay}</span>
                </S.DogBirthDay>
              </S.DogTextInfomation>
              <S.ButtonContainer>
                <S.DetailButton>상세보기</S.DetailButton>
              </S.ButtonContainer>
            </S.OwnedBreedsList>
          ))}
        </S.ListContainer>
      </S.ContentBox>
    </S.Container>
  );
};

export default OwnedBreeds;
