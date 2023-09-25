import React, { FC } from "react";
import Introduction from "@component/BreederPublicProfile/Introduction/Introduction";
import OwnedBreeds from "@component/BreederPublicProfile/OwnedBreeds/OwnedBreeds";
import * as S from "./BreederPublicProfileStyle";

const BreederPublicProfilePage: FC = () => {
  return (
    <S.ContentContainer>
      <Introduction />
      <OwnedBreeds />
    </S.ContentContainer>
  );
};

export default BreederPublicProfilePage;
