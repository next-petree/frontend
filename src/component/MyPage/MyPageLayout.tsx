import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { BoxsContainer } from "./Styles1";
import ModifyAuthContent from "./ModifyAuthContent/ModifyAuthContent";
import ProfileContent from "./ProfileContent/ProfileContent";
import AdoptListBreeder from "./AdoptList/Breeder/Breeder";
import AdoptListAdopter from "./AdoptList/Adopter/Adopter";

interface IMypage {
  where: string;
}

const MyPageLayout = ({ where }: IMypage) => {
  return (
    <BoxsContainer>
      <Navbar />
      {where === "ModifyAuth" ? (
        <ModifyAuthContent />
      ) : where === "Profile" ? (
        <ProfileContent />
      ) : where === "AdoptListB" ? (
        <AdoptListBreeder />
      ) : where === "AdoptListA" ? (
        <AdoptListAdopter />
      ) : null}
    </BoxsContainer>
  );
};

export default MyPageLayout;
