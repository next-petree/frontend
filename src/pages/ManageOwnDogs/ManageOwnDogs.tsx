import ContentBox from "../../component/ManageOwnDogs/ContentBox/ContentBox";
import Navbar from "../../component/ManageReview/Navbar/Navbar";
import CustomLayout from "../Layout/CustomLayout";
import { BoxsContainer } from "./styles";

const ManageOwnDogs = () => {
  return (
    <CustomLayout height={1556}>
      <BoxsContainer>
        <Navbar />
        <ContentBox />
      </BoxsContainer>
    </CustomLayout>
  );
};

export default ManageOwnDogs;
