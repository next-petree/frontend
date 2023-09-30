import * as S from "./LeftMenuBarStyle";

const LeftMenuBar = () => {
  return (
    <S.Container>
      <S.StyledLink to="/application-history">분양신청내역</S.StyledLink>
      <S.StyledLink to="/breed-management">보유견종 관리</S.StyledLink>
      <S.StyledLink to="/profile-management">프로필 관리</S.StyledLink>
      <S.StyledLink to="/userprofileedit">회원정보 수정</S.StyledLink>
      <S.DeleteAccountLink to="/delete-account">회원탈퇴</S.DeleteAccountLink>
    </S.Container>
  );
};

export default LeftMenuBar;
