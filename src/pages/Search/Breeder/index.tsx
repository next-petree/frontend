import { Typography, Pagination } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { Image } from "@component/0min/Image";
import { SwitchIOS } from "@component/Search/Breeder/SwitchIOS";
import { EnterInformationFormItem } from "@component/SignUp/EnterInformation/EnterInformationInput";
import GirlPNG from "@assets/0min/girl.png";

const SearchBreederPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onClick = () => setIsChecked(!isChecked);
  return (
    <>
      <S.Section>
        <Column styles={{ gap: "104px" }}>
          <Column styles={{ gap: "42px" }}>
            <Typography component="h1">브리더 모아보기</Typography>
            <Center styles={{ gap: "15px" }}>
              <SwitchIOS checked={isChecked} onClick={onClick} />
              <S.Button>
                <Typography>인증 브리더만 모아보기</Typography>
              </S.Button>
              <EnterInformationFormItem.Input placeholder="원하시는 견종을 입력해 주세요."></EnterInformationFormItem.Input>
              <EnterInformationFormItem.Trigger>
                검색
              </EnterInformationFormItem.Trigger>
            </Center>
          </Column>
          <S.Grid>
            {Array.from({ length: 50 }, () => 0).map((value, index) => (
              <S.Button type="button" key={index}>
                <S.Card>
                  <Column styles={{ gap: "12px" }}>
                    <Column styles={{ gap: "20px" }}>
                      <Image
                        src={GirlPNG}
                        width={240}
                        height={144}
                        alt={"girl"}
                      />
                      <Center
                        styles={{ horizontalAlign: "start", gap: "12px" }}
                      >
                        <Typography noWrap width="170px">
                          Title Title Title Title Title Title Title Title Title
                          Title Title Title Title Title
                        </Typography>
                        <Typography noWrap width="60px">
                          (12km)
                        </Typography>
                      </Center>
                    </Column>
                    <Typography textAlign={"left"} noWrap width={"100%"}>
                      주력 견종: 푸들, 말티즈, 치즈스틱, 피자, 호스팅
                    </Typography>
                  </Column>
                </S.Card>
              </S.Button>
            ))}
          </S.Grid>
        </Column>
      </S.Section>

      <S.SearchPageFooter>
        <Center>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Center>
      </S.SearchPageFooter>
    </>
  );
};

export default SearchBreederPage;

const S = {
  Section: styled.section`
    box-sizing: border-box;
    text-align: center;

    width: 1420px;
    max-width: 90vw;
    margin: 0px auto 50px auto;
    padding: 111px 78px 86px 78px;
    border-radius: 32px;

    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.09);
  `,
  SearchPageFooter: styled.footer`
    padding-bottom: 80px;
  `,
  Card: styled.div`
    box-sizing: border-box;
    width: 280px;
    height: 300px;
    padding: 20px 20px 40px 20px;

    border-radius: 16px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
  `,
  Grid: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(254px, auto));
    column-gap: 48px;
    row-gap: 56px;

    justify-content: center;
  `,
  Button: styled.button`
    background-color: transparent;
    border: none;
    padding: none;
    margin: none;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
};
