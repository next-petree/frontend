import * as S from "./PasswordUpdateStyle";

const PasswordUpdate = () => {
  return (
    <S.Container>
      <S.PasswordUpdateLabel>비밀번호 변경</S.PasswordUpdateLabel>

      <S.ContentBox>
        <S.CurrentPassword>
          <S.CurrentPasswordLabel>현재 비밀번호 입력</S.CurrentPasswordLabel>
          <S.CurrentPasswordInput />
        </S.CurrentPassword>

        <S.NewPassword>
          <S.NewPasswordLabel>변경할 비밀번호 입력</S.NewPasswordLabel>
          <S.NewPasswordInput />
        </S.NewPassword>

        <S.NewPasswordCheck>
          <S.NewPasswordCheckLabel>
            변경할 비밀번호 확인
          </S.NewPasswordCheckLabel>
          <S.NewPasswordCheckInput />
        </S.NewPasswordCheck>
      </S.ContentBox>

      <S.ButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default PasswordUpdate;
