import React, { FC } from "react";
import * as S from "../PublicProfileStyle";
import Introduction from "@component/PublicProfile/Introduction/Introduction";

const AdopterPublicProfilePage: FC = () => {
  return (
    <S.ContentContainer>
      <Introduction showMainBreed={false} />
    </S.ContentContainer>
  );
};

export default AdopterPublicProfilePage;
