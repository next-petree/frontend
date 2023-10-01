import { Container } from "@mui/material";
import * as S from "./ProfileManagementStyle";

const ProfileManagement = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ProfileImageContainer>
          <S.ProfileImage />
        </S.ProfileImageContainer>

        <S.ProfileManagementLabel>프로필</S.ProfileManagementLabel>

        <S.AuthenticationStatusChecker>
          <S.AuthenticationStatusCheckerLabel>
            브리더 인증여부
          </S.AuthenticationStatusCheckerLabel>
          <S.AuthenticationStatusCheckerInput />
        </S.AuthenticationStatusChecker>

        <S.SelfIntroduction>
          <S.SelfIntroductionLabel>자기소개</S.SelfIntroductionLabel>
          <S.SelfIntroductionInput />
        </S.SelfIntroduction>
      </S.Content>

      <S.ButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ProfileManagement;
