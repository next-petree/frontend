import { Typography } from "@mui/material";
import { useState } from "react";

import { Center } from "@component/0min/Center";
import { Column } from "@component/0min/Column";
import { SwitchIOS } from "@component/Search/Breeder/SwitchIOS";
import { SearchPageLayout } from "@component/Search/SearchPageLayout";
import { EnterInformationFormItem } from "@component/SignUp/EnterInformation/EnterInformationInput";
import { WrapButton } from "@component/0min/WrapButton";

export const SearchBreederHeader = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onClick = () => setIsChecked(!isChecked);

  return (
    <Column styles={{ gap: "42px" }}>
      <SearchPageLayout.Title>브리더 모아보기</SearchPageLayout.Title>
      <Center styles={{ gap: "15px" }}>
        <SwitchIOS checked={isChecked} onClick={onClick} />
        <WrapButton>
          <Typography>인증 브리더만 모아보기</Typography>
        </WrapButton>
        <EnterInformationFormItem.Input placeholder="원하시는 견종을 입력해 주세요."></EnterInformationFormItem.Input>
        <EnterInformationFormItem.Trigger>
          검색
        </EnterInformationFormItem.Trigger>
      </Center>
    </Column>
  );
};
