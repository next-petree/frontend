import styled from "@emotion/styled";

import { SearchPageCard } from "@component/Search/SearchPageCard";
import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";

import GirlPNG from "@assets/0min/girl.png";

type BreederModel = {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: `010-1234-5678`;
  address1: string;
  verified: boolean;
  distance: number;
  types: string[];
  profileImagUrl: string;
};

export const SearchBreederContent = () => {
  // TODO: use business hook

  const mockDatas: BreederModel[] = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    email: "test@test.com",
    nickname: "닉네임".repeat(index + 1),
    phoneNumber: `010-1234-5678`,
    address1: "강남 강남 강남",
    verified: true,
    distance: 219.8,
    types: ["리트리버", "리트리버"].map((types) => types.repeat(index + 1)),
    profileImagUrl: "",
  }));

  return (
    <S.Grid>
      {mockDatas?.map((value, index) => (
        <SearchPageCard key={index}>
          <Column styles={{ gap: "12px" }}>
            <Column styles={{ gap: "20px" }}>
              <SearchPageCard.Image src={GirlPNG} alt={"girl"} />
              <Center styles={{ horizontalAlign: "start", gap: "12px" }}>
                <SearchPageCard.Title>{value.nickname}</SearchPageCard.Title>
                <SearchPageCard.SubTitle>
                  ({value.distance}km)
                </SearchPageCard.SubTitle>
              </Center>
            </Column>
            <SearchPageCard.Content>
              주력견종: {value.types.join(",")}
            </SearchPageCard.Content>
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
