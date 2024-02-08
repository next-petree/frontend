import Navbar from "../../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import { BoxsContainer, Container } from "../styles";
import OwnDogsCreateForm from "../../../component/ManageOwnDogs/Form/OwnDogsCreateForm";

const CreateOwnDogs = () => {
  return (
    <CustomLayout height={1653}>
      <Container>
        <BoxsContainer>
          <Navbar />
          <OwnDogsCreateForm />
        </BoxsContainer>
      </Container>
    </CustomLayout>
  );
};

export default CreateOwnDogs;
