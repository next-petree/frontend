import { AuthDeleteContainer, Category, CategoryContainer, Main, NavBarContainer } from "./styles";


export const NavCategory = [
  {
    id: 1,
    name: "분양신청내역",
  },
  {
    id: 2,
    name: "보유견종 관리",
  },
  {
    id: 3,
    name: "프로필 관리",
  },
  {
    id: 4,
    name: "회원정보 수정",
  },
];

const Navbar = () => {
  return (
    <NavBarContainer>
      <Main>
        {NavCategory.map((cate) => (
          <CategoryContainer key={cate.id}>
            <Category>{cate.name}</Category>
          </CategoryContainer>
        ))}
      </Main>
      <AuthDeleteContainer>
        <Category>회원 탈퇴</Category>
      </AuthDeleteContainer>
    </NavBarContainer>
  );
};

export default Navbar;
