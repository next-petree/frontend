import Navbar from "../../../component/ManageReview/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import ReviewForm from "../../../component/ManageReview/Form/ReviewForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";

const CreateReview = () => {
  return (
    <CustomLayout height={1653}>
      <Container>
        <BoxsContainer>
          <Navbar />
          <ReviewForm />
        </BoxsContainer>
        <SubmitButton>저장</SubmitButton>
      </Container>
    </CustomLayout>
  );
};

export default CreateReview;
