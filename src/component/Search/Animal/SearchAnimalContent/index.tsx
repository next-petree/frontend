import styled from "@emotion/styled";

import { SearchPageCard } from "@component/Search/SearchPageCard";
import DogPNG from "@assets/0min/dog.png";
import { Column } from "@component/0min/Column";
import { Typography } from "@mui/material";

interface AnimalModel {
  id: number;
  name: string;
  type: string;
  gender: "MALE" | "FEMALE";
  status: "AVAILABLE";
  birthDate: Date;
  /**
   * /TODO: 실제 필드명 imgUrl: `{${string}}`;
   * /
  /** mockData를 위한 임시 filed */
  imgUrl: string;
  breederNickName: string;
  isBreederVerified: true;
}
export const SearchAnimalContent = () => {
  // TODO: use business hook

  const mockDatas: AnimalModel[] = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    status: "AVAILABLE",
    breederNickName: Array(index + 1)
      .fill("수현")
      .join(" "),
    isBreederVerified: true,
    name: Array(index + 1)
      .fill("쫑이")
      .join(" "),
    km: Array(index + 1)
      .fill(index + 1)
      .join(""),
    type: Array(index + 1)
      .fill("시바견")
      .join(" "),
    gender: "FEMALE",
    birthDate: new Date(),
    content: Array(index + 1)
      .fill("나는 컨텐츠랍니다.")
      .join(" "),
    imgUrl: DogPNG,
  }));

  return (
    <S.Grid>
      {mockDatas?.map((value, index) => (
        <SearchPageCard key={index} styles={{ padding: "20px 20px 30px 20px" }}>
          <Column styles={{ gap: "12px" }}>
            <Column styles={{ gap: "20px", horizontalAlign: "start" }}>
              <SearchPageCard.Image src={value.imgUrl} alt={"asd"} />
              <SearchPageCard.Title>{value.name}</SearchPageCard.Title>
            </Column>
            <Column styles={{ gap: "4px", horizontalAlign: "start" }}>
              <SearchPageCard.Content>
                견종: {value.type}
              </SearchPageCard.Content>
              <SearchPageCard.Content>
                성별: {value.gender.repeat(index + 1)}
              </SearchPageCard.Content>
              <SearchPageCard.Content>
                출생일: {value.birthDate.toLocaleDateString()}
              </SearchPageCard.Content>
            </Column>
            <Typography align="right" noWrap width={"100%"}>
              {value.breederNickName}님의 보유견종
            </Typography>
          </Column>
        </SearchPageCard>
      ))}
    </S.Grid>
  );
};

const S = {
  Grid: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(254px, auto));
    column-gap: 48px;
    row-gap: 56px;

    justify-content: center;
  `,
};
