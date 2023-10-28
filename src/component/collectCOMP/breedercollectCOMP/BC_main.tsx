import BreederForm from "./breeder_form";
import BreederBox from "./breeder_Box";
import {
  BoxContainer,
  MainBox,
  Title,
  Wrapper,
} from "../../../styles/collect_main_styled";
import Pagenation from "../pagenation";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function BC_Main() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  return (
    <Wrapper>
      <MainBox>
        <Title>브리더 모아보기</Title>
        <BreederForm />
        <BoxContainer>
          {[1, 1, 1, 1, 1, 1, 1, 1].map((box, i) => (
            <BreederBox key={i} page={param.pageId} />
          ))}
        </BoxContainer>
      </MainBox>
      <Pagenation
        page={page}
        totalPage={28}
        setPage={setPage}
        name={"breeders"}
      />
    </Wrapper>
  );
}
