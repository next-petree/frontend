
import BreederForm from "./breeder_form";
import BreederBox from "./breeder_Box";
import Pagenation from "../pagenation";
import { BoxContainer, MainBox, Title, Wrapper } from "../main_styled";

interface IBreederCollect {
  param:String | undefined;
}



export default function BC_Main({param}:IBreederCollect) {
  console.log(param)
  return (
    <Wrapper>
      <MainBox>
        <Title>브리더 모아보기</Title>
        <BreederForm />
        <BoxContainer>
          {[1, 1, 1, 1, 1, 1, 1, 1].map((box, i) => (
            <BreederBox key={i} />
          ))}
        </BoxContainer>
      </MainBox>
      <Pagenation />
    </Wrapper>
  );
}
