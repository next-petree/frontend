import React from "react";
import * as S from "./style";
import { Logo } from "@component/common/Logo";
import { useIntl } from "react-intl";
const Footer = () => {
  const { formatMessage } = useIntl();
  return (
    <S.FooterEl>
      <div className="container">
        <S.IntroContainer>
          <Logo color="white" />
          <span>
            펫트리는 브리더 서비스를 하는
            <br />
            기관입니다. 더 많은 가족이 브리더의
            <br />
            서비스를 통해 가족을 만날 수 있도록
            <br />
            최선을 다하겠습니다.
          </span>
        </S.IntroContainer>
        <S.FooterItemList id="footer-item-list"></S.FooterItemList>
      </div>
      <S.CopyRight>2023 Breeder Inc. All rights reserved </S.CopyRight>
    </S.FooterEl>
  );
};

export default Footer;
