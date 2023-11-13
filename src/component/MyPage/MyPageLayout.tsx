import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { BoxsContainer } from "./styles";
import ModifyAuthContent from "./ModifyAuthContent/ModifyAuthContent";
import ProfileContent from "./ProfileContent/ProfileContent";

interface IMypage {
  where: string;
}

const MyPageLayout = ({ where }: IMypage) => {
  return (
    <BoxsContainer>
      <Navbar />
      {where === "ModifyAuth" ? <ModifyAuthContent /> : 
      where === "Profile" ? <ProfileContent/> : null}
    </BoxsContainer>
  );
};

export default MyPageLayout;
