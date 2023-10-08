import * as S from "./DeleteMyAccountStyle";

const DeleteMyAccount = () => {
  const terms = `Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Dolorum maiores dolor laborum nesciunt. Atque magnam quos
  delectus, dolore aspernatur ullam, assumenda ducimus error doloribus
  eaque ab laboriosam deleniti ipsum, vitae neque ipsa magni placeat! Earum, vero. Natus, obcaecati sapiente? 
  Laboriosam totam exercitationem iure id, culpa aperiam itaque accusantium rem aliquam esse obcaecati ipsum illo natus vel illum quo in nobis molestias
  minus, consequatur, molestiae ipsam dolorum! Minima, voluptatibus
  eaque saepe omnis eligendi dolores, nesciunt sapiente tenetur nisieius dolore illum, quia amet earum dolorum unde perspiciatis
  consequuntur est accusantium obcaecati tempora voluptatem!
  Reprehenderit aspernatur mollitia hic eius a repellendus!
  Lorem ipsum, dolor sit amet consectetur adipisicing
  elit. Dolorum maiores dolor laborum nesciunt. Atque magnam quos
  delectus, dolore aspernatur ullam, assumenda ducimus error doloribus
  eaque ab laboriosam deleniti ipsum, vitae neque ipsa magni placeat! Earum, vero. Natus, obcaecati sapiente? 
  Laboriosam totam exercitationem iure id, culpa aperiam itaque accusantium rem aliquam esse obcaecati ipsum illo natus vel illum quo in nobis molestias
  minus, consequatur, molestiae ipsam dolorum! Minima, voluptatibus
  eaque saepe omnis eligendi dolores, nesciunt sapiente tenetur nisieius dolore illum, quia amet earum dolorum unde perspiciatis
  consequuntur est accusantium obcaecati tempora voluptatem!
  Reprehenderit aspernatur mollitia hic eius a repellendus!`;
  return (
    <S.Container>
      <S.Content>
        <S.DeleteMyAccountLabel>회원탈퇴</S.DeleteMyAccountLabel>
        <S.AccountDeletionTermsLabel>회원탈퇴 안내</S.AccountDeletionTermsLabel>
        <S.AccountDeletionTermsTextArea
          value={terms}
          readOnly
        ></S.AccountDeletionTermsTextArea>
        <S.CheckTermArea>
          <S.CheckBox />
          <S.CheckAgreeMent>
            안내 사항을 모두 확인하였으며, 이에 동의합니다.
          </S.CheckAgreeMent>
        </S.CheckTermArea>
        <S.ButtonContainer>
          <S.CancelButton>취소</S.CancelButton>
          <S.DeleteButton>회원 탈퇴</S.DeleteButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export default DeleteMyAccount;
