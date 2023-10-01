import * as S from "./MainBreedStyle";

const MainBreed = () => {
  return (
    <S.Container>
      <S.Content>
        <S.MainBreedLabel>주력견종</S.MainBreedLabel>

        <S.MainBreedInputButton>
          <S.MainBreedInput />
          <S.MainBreedSearchButton>검색</S.MainBreedSearchButton>
        </S.MainBreedInputButton>
      </S.Content>

      <S.ButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MainBreed;
