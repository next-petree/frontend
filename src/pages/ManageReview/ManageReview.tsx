import ContentBox from "../../component/ManageReview/ContentBox/ContentBox";
import Navbar from "../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../Layout/CustomLayout";
import CustomLayout3 from "../Layout/CustomLayout3";
import { BoxsContainer } from "./styles";

const ManageReview = () => {
  return (
    <CustomLayout3>
      <BoxsContainer>
        <Navbar />
        <ContentBox />
      </BoxsContainer>
    </CustomLayout3>
  );
};

export default ManageReview;
