import React, { FC } from "react";
import Introduction from "@component/PublicProfile/Introduction/Introduction";
import OwnedBreeds from "@component/PublicProfile/OwnedBreeds/OwnedBreeds";
import * as S from "../PublicProfileStyle";

const BreederPublicProfilePage: FC = () => {
  return (
    <S.ContentContainer>
      <Introduction showMainBreed={true} />
      <OwnedBreeds />
    </S.ContentContainer>
  );
};

export default BreederPublicProfilePage;
