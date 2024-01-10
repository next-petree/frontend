import Navbar from "../../../component/ManageReview/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import ReviewForm from "../../../component/ManageReview/Form/ReviewForm";
import {
  BoxsContainer,
  Container,
  SubmitButton,
  ButtonContainer,
} from "../styles";

const EditReview = () => {
  return (
    <CustomLayout height={1653}>
      <Container>
        <BoxsContainer>
          <Navbar />
          <ReviewForm />
        </BoxsContainer>
        <ButtonContainer>
          <SubmitButton>저장</SubmitButton>
        </ButtonContainer>
      </Container>
    </CustomLayout>
  );
};

export default EditReview;
