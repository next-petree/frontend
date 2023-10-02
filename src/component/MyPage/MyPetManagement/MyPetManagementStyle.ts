import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 1100px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const InnerContainer = styled.div`
  margin: 50px;
`;

//상단 컨텐츠
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

export const MyPetManagementLabel = styled.label`
  font-size: 30px;
`;

export const HeaderContent = styled.div``;

export const MyPetManagementSelect = styled.select`
  width: 200px;
  height: 52px;
  text-align: center;
  border-radius: 10px;
  margin-right: 15px;
`;

export const MyPetMangementInput = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MyPetManagementSearchButton = styled(Button)`
  padding: 18px 40px;
`;

//메인 컨텐츠
export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
  height: 700px;
  background-color: #fff;
`;

export const Content = styled.div`
  width: calc(25% - 20px);
  height: 330px;
  margin: 10px;
  box-sizing: border-box;
`;

export const PetImage = styled.div`
  width: 100%;
  height: 130px;
  background-color: yellow;
  border-radius: 15px;
`;

export const PetName = styled.div`
  font-size: 30px;
  margin-top: 25px;
`;

export const PetType = styled.div`
  font-size: 20px;
  margin-top: 25px;
`;

export const PetGender = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const PetBirthday = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

//하단 컨텐츠
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

export const CenterContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const PageNation = styled.div`
  display: flex;
  align-items: center;
  margin-left: 180px;
`;

interface PageButtonProps {
  isCurrent?: boolean;
}

export const ArrowButton = styled.button`
  background-color: #ccc;
  margin: 5px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${({ isCurrent }) => (isCurrent ? "#ddd" : "#fff")};
  margin: 5px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;
export const PetAddButton = styled(Button)`
  width: 200px;
`;
