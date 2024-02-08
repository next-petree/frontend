import ContentBox from "../../component/ManageReview/ContentBox/ContentBox";
import Navbar from "../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../Layout/CustomLayout";
import { BoxsContainer } from "./styles";

const ManageReview = () => {
  return (
    <CustomLayout height={1438}>
      <BoxsContainer>
        <Navbar />
        <ContentBox />
      </BoxsContainer>
    </CustomLayout>
  );
};

export default ManageReview;
