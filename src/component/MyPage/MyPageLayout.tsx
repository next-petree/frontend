import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { BoxsContainer } from "./styles";
import ModifyAuthContent from "./ModifyAuthContent/ModifyAuthContent";

interface IMypage {
  where: string;
}

const MyPageLayout = ({ where }: IMypage) => {
  return (
    <BoxsContainer>
      <Navbar />
      {where === "ModifyAuth" ? <ModifyAuthContent /> : null}
    </BoxsContainer>
  );
};

export default MyPageLayout;
