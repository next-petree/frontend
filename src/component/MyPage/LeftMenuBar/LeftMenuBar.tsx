import * as S from "./LeftMenuBarStyle";

interface Props {
  breeder?: boolean;
}

const LeftMenuBar: React.FC<Props> = ({ breeder = false }) => {
  return (
    <S.Container>
      {breeder ? (
        <>
          <S.StyledLink to="breeder/application-history">
            분양신청내역
          </S.StyledLink>
          <S.StyledLink to="/breeder/breed-management">
            보유견종 관리
          </S.StyledLink>
          <S.StyledLink to="/breeder/profile-management">
            프로필 관리
          </S.StyledLink>
          <S.StyledLink to="/breeder/profile-edit">회원정보 수정</S.StyledLink>
          <S.DeleteAccountLink to="breeder/delete-account">
            회원탈퇴
          </S.DeleteAccountLink>
        </>
      ) : (
        <>
          <S.StyledLink to="/adopter/application-history">
            분양신청내역
          </S.StyledLink>
          <S.StyledLink to="/adopter/review-management">
            분양후기 관리
          </S.StyledLink>
          <S.StyledLink to="/adopter/profile-management">
            프로필 관리
          </S.StyledLink>
          <S.StyledLink to="/adopter/profile-edit">회원정보 수정</S.StyledLink>
          <S.DeleteAccountLink to="/adopter/delete-account">
            회원탈퇴
          </S.DeleteAccountLink>
        </>
      )}
    </S.Container>
  );
};

export default LeftMenuBar;
