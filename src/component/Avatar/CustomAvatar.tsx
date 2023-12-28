import { CustomerBadge, BreederBadge, Avatar } from "../../assets/icons";
import { ICAProps } from "../../types";

import * as S from "./Styles1";

export const CustomAvatar = ({
  isQualifiedBreeder,
  isQualifiedCustomer,
  imgSrc,
}: ICAProps) => {
  if (isQualifiedCustomer) {
    return (
      <S.SvgWrapper>
        {imgSrc ? (
          <S.ImageContainer borderColor={"#23F39C"}>
            <S.CustomImage src={imgSrc} alt="" />
          </S.ImageContainer>
        ) : (
          <Avatar borderColor={"#23F39C"} />
        )}
        <S.Container>
          <S.BadgeContainer>
            <S.BadgeInnerContainer>
              <CustomerBadge />
            </S.BadgeInnerContainer>
          </S.BadgeContainer>
        </S.Container>
      </S.SvgWrapper>
    );
  }

  if (isQualifiedBreeder) {
    return (
      <S.SvgWrapper>
        {imgSrc ? (
          <S.ImageContainer borderColor={"#FF6363"}>
            <S.CustomImage src={imgSrc} alt="" />
          </S.ImageContainer>
        ) : (
          <Avatar borderColor={"#FF6363"} />
        )}
        <S.Container>
          <S.BadgeContainer>
            <S.BadgeInnerContainer>
              <BreederBadge width="40" height="40" />
            </S.BadgeInnerContainer>
          </S.BadgeContainer>
        </S.Container>
      </S.SvgWrapper>
    );
  }

  return (
    <S.SvgWrapper>
      {imgSrc ? (
        <S.ImageContainer>
          <S.CustomImage src={imgSrc} alt="" />
        </S.ImageContainer>
      ) : (
        <Avatar />
      )}
    </S.SvgWrapper>
  );
};

export default CustomAvatar;
