import { Center } from "@component/0min/Center";
import { Image } from "@component/0min/Image";
import { TestQuestionController } from "@component/Test/Introduce/Question/TestQuestionController";

import PetreeDogCatBirdBackPNG from "@assets/0min/petree_dog_cat_bird_back.png";
import styled from "@emotion/styled";

const TestQuestionPage = () => {
  return (
    <S.Relative>
      <Center>
        <TestQuestionController />
        <S.Absolute>
          <Image
            src={PetreeDogCatBirdBackPNG}
            alt={"petree_dog_cat_bird_back"}
            width={290}
            height={290}
          />
        </S.Absolute>
      </Center>
    </S.Relative>
  );
};

// TODO: Page가 아닌 별도의 컴포넌트로 분리해야함
const S = {
  Relative: styled.div`
    position: relative;
  `,
  Absolute: styled.div`
    position: absolute;
    right: 70px;
    bottom: 60px;
    z-index: -1;
  `,
};
export default TestQuestionPage;
