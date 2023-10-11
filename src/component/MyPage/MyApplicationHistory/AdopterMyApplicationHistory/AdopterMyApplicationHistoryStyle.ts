import { Link as DefaultLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 1000px;
  margin-bottom: 8%;
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
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

export const MyReviewManagementLabel = styled.label`
  font-size: 30px;
  display: block;
`;

export const SubLabel = styled.label`
  margin-top: 10px;
  display: block;
`;

export const HeaderContent = styled.div``;

export const MyReviewManagementSelect = styled.select`
  width: 200px;
  height: 52px;
  text-align: center;
  border-radius: 10px;
  margin-right: 15px;
`;

export const MyReviewMangementInput = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid #000;
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

export const MyReviewManagementSearchButton = styled(Button)`
  padding: 18px 40px;
`;

//메인 컨텐츠
export const StyledLink = styled(DefaultLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 50px;
  width: 100%;
  height: 500px;
  background-color: #fff;
`;

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0 50px 0 50px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const TitleBreederName = styled.div``;

export const TitleNumber = styled.div``;

export const TitleDate = styled.div``;

export const TitlePetNameAndType = styled.div``;

export const TitleList = styled.div``;

export const TitleAdoptionStatus = styled.div``;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
`;

export const ReviewTextArea = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #000;
  align-items: center;
`;

export const ReviewTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 110px;
  height: 100%;
`;

export const BreederName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 120px;
  height: 100%;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 170px;
  height: 100%;
`;

export const PetNameAndType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 210px;
  height: 100%;
  margin-right: 25px;
`;

export const DetailButton = styled(Button)`
  margin-right: 45px;
`;

export const AdoptionStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 110px;
  height: 100%;
`;

//하단 컨텐츠
export const Footer = styled.div`
  display: flex;
  justify-content: center;
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
`;

export const ArrowButton = styled.button`
  background-color: #ccc;
  margin: 5px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
`;

export const PageButton = styled.button`
  background-color: #fff;
  margin: 5px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;

  &.active {
    background-color: #ddd;
  }

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;
