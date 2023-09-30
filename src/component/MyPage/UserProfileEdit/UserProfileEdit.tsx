import * as S from "./UserProfileEditStyle";

const UserProfileEdit = () => {
  return (
    <S.Container>
      <S.UserProfileEditLabel>회원정보 수정</S.UserProfileEditLabel>

      <S.ContentBox>
        <S.LeftContentArea>
          <S.UserTypeSelector>
            <S.UserTypeSelectorLabel>회원유형</S.UserTypeSelectorLabel>
            <S.UserTypeSelectorSelect>
              <option value="breeder">브리더</option>
              <option value="adopter">분양희망자</option>
            </S.UserTypeSelectorSelect>
          </S.UserTypeSelector>

          <S.UserEmail>
            <S.UserEmailLabel>이메일</S.UserEmailLabel>
            <S.UserEmailInput />
          </S.UserEmail>

          <S.UserPhoneNumber>
            <S.UserPhoneNumberLabel>휴대전화</S.UserPhoneNumberLabel>
            <S.UserPhoneNumberInput />
          </S.UserPhoneNumber>
        </S.LeftContentArea>

        <S.RightContentArea>
          <S.UserNickName>
            <S.UserNickNameLabel>닉네임</S.UserNickNameLabel>
            <S.InputWithButton>
              <S.UserNickNameInput />
              <S.ValidationButton>중복확인</S.ValidationButton>
            </S.InputWithButton>
          </S.UserNickName>

          <S.UserAdress>
            <S.UserAdressLabel>활동지역</S.UserAdressLabel>
            <S.InputWithButton>
              <S.UserAdressInput />
              <S.SearchAddressButton>주소검색</S.SearchAddressButton>
            </S.InputWithButton>
            <S.UserAdressInputDetail />
          </S.UserAdress>
        </S.RightContentArea>
      </S.ContentBox>

      <S.ButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default UserProfileEdit;
