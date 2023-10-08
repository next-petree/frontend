import * as S from "./style";
import Picture from "@component/common/PictureEl";
import BgImage from "assets/images/main/start_background.png";
import BgImageAvif from "assets/images/main/start_background.avif";
import BgImageWebp from "assets/images/main/start_background.webp";
export const StartSection = () => {
  return (
    <S.Start>
      <Picture
        className="background"
        imgUrl={BgImage}
        avifUrl={BgImageAvif}
        webpUrl={BgImageWebp}
        imgAlt="강아지"
      />
      <S.Container>
        <S.InnerContainer>
          <h2>
            펫트리와 함께,
            <br /> 분양 서비스를 시작하세요!
          </h2>
          <p className="sub-title">
            섬세한 브리더의 손길로 탄생한 반려견과 함께하세요!
          </p>
          <S.TagWrapper>
            <span className="tag">#펫트리</span>
            <span className="tag">#브리더</span>
            <span className="tag">#반려동물</span>
            <span className="tag">#댕댕이</span>
            <span className="tag">#가족</span>
          </S.TagWrapper>
        </S.InnerContainer>
      </S.Container>
    </S.Start>
  );
};
