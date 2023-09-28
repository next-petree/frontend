import { Typography } from "@mui/material";
import styled from "@emotion/styled";

import { Image } from "@component/0min/Image";
import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";

import PetreeDogCatBirdHug from "@assets/0min/petree_dog_cat_bird_hug.png";

export const SignUpResult = () => {
  return (
    <Center>
      <S.Margin>
        <Column styles={{ gap: "40px" }}>
          <Image
            src={PetreeDogCatBirdHug}
            alt="petreeeone"
            width={264}
            height={264}
          />
          <Typography component="h2">회원가입이 완료되었습니다!</Typography>
        </Column>
      </S.Margin>
    </Center>
  );
};

const S = {
  Margin: styled.div`
    margin-bottom: 85px;
  `,
};
