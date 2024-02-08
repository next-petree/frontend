import Navbar from "../../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import ReviewCreateForm from "../../../component/ManageReview/Form/ReviewCreateForm";
import { BoxsContainer, Container } from "../styles";

const CreateReview = () => {
  return (
    <CustomLayout height={1653}>
      <Container>
        <BoxsContainer>
          <Navbar />
          <ReviewCreateForm />
        </BoxsContainer>
      </Container>
    </CustomLayout>
  );
};

export default CreateReview;
