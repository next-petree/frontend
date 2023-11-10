import { styled } from "styled-components";
import ModifyAuthForm from "./Forms/ModifyAuthForm";
import ChangePassword from "../../../pages/ChangePassword/ChangePassword";
import ChangePwForm from "./Forms/ChangePwForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
`



const ModifyAuthContent = () => {
  return (
    <Wrapper>
      <ModifyAuthForm/>
      <ChangePwForm/>
      
    </Wrapper>
  );
};

export default ModifyAuthContent;
