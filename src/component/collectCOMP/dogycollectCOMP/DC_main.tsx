import styled from "styled-components";
import { useState } from "react";
import DogyBox from "./dogy_Box";
import Pagenation from "../pagenation";
import SearchFilter from "./dogy_searchfilter";
import {
  BoxContainer,
  MainBox,
  Title,
  Wrapper,
} from "../../../styles/collect_main_styled";
import { useParams } from "react-router-dom";

const SearchBtn = styled.button`
  align-self: flex-end;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #35d8d5;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: white;
  margin-top: -1vh;
  margin-bottom: -6vh;
`;

export default function DC_main() {
  const param = useParams();
  const [onSearch, setOnSearch] = useState(false);
  const [page, setPage] = useState(Number(param.pageId));
  return (
    <Wrapper>
      <MainBox>
        <Title>강아지 모아보기</Title>
        <SearchBtn onClick={() => setOnSearch(!onSearch)}>검색 필터</SearchBtn>
        <BoxContainer>
          {[1, 1, 1, 1, 1, 1, 1, 1].map((box, i) => (
            <DogyBox key={i} />
          ))}
        </BoxContainer>
      </MainBox>
      <Pagenation page={page} totalPage={30} setPage={setPage} name={"dogys"} />
      {onSearch ? <SearchFilter /> : null}
    </Wrapper>
  );
}
