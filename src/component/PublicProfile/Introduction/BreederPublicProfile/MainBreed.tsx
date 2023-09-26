import * as S from "./MainBreedStyle";

const MainBreed = () => {
  const data = {
    mainBreed: {
      dogProfiles: ["포메라니안", "치와와", "골든리트리버"],
    },
  };
  return (
    <S.Container>
      <S.MainBreedText>주력견종</S.MainBreedText>
      <S.DogProfileContainer>
        {data.mainBreed.dogProfiles.map((dog, index) => (
          <S.DogProfile key={index}>
            <S.DogImage />
            <S.DogName>{dog}</S.DogName>
          </S.DogProfile>
        ))}
      </S.DogProfileContainer>
    </S.Container>
  );
};

export default MainBreed;
