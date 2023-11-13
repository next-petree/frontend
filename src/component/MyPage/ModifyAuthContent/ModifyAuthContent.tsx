import { styled } from "styled-components";
import ModifyAuthForm from "./ModifyAuth_Forms/ModifyAuthForm";
import ChangePassword from "../../../pages/ChangePassword/ChangePassword";
import ChangePwForm from "./ModifyAuth_Forms/ChangePwForm";

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
