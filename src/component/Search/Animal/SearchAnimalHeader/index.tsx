import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";

import { SearchPageLayout } from "@component/Search/SearchPageLayout";

import { Button } from "@mui/material";
export const SearchAnimalHeader = () => {
  return (
    <Column styles={{ gap: "60px" }}>
      <SearchPageLayout.Title>강아지 모아보기</SearchPageLayout.Title>

      <Center styles={{ horizontalAlign: "end" }}>
        <Button variant="contained">검색 필터</Button>
      </Center>
    </Column>
  );
};
