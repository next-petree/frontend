import * as S from "./MyPetManagementStyle";

const MyPetManagement = () => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <S.MyPetManagementLabel>보유견종관리</S.MyPetManagementLabel>
          <S.MyPetManagementDropdown />
          <S.MyPetMangementInput />
          <S.MyPetManagementSearchButton>검색</S.MyPetManagementSearchButton>
        </S.Header>
        <S.Main>
          <S.Content>
            <S.PetImage />
            <S.PetName>럭키</S.PetName>
            <S.PetType>견종: 시바견</S.PetType>
            <S.PetGender>성별: 수컷</S.PetGender>
            <S.PetBirthday>출생일: 2023.05.23</S.PetBirthday>
          </S.Content>
        </S.Main>
        <S.Footer>
          <S.PageNation />
          <S.PetAddButton>추가</S.PetAddButton>
        </S.Footer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default MyPetManagement;
