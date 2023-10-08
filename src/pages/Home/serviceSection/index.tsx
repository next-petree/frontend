import Picture from "@component/common/PictureEl";
import TwoPuppys from "assets/images/main/service_left.png";
import TwoPuppysAvif from "assets/images/main/service_left.avif";
import TwoPuppysWebp from "assets/images/main/service_left.webp";
import * as S from "./style";
export const ServiceSection = () => {
  return (
    <S.Service>
      <S.Container>
        <S.InnerContainer>
          <div className="container">
            <Picture
              className="left-image"
              imgUrl={TwoPuppys}
              avifUrl={TwoPuppysAvif}
              webpUrl={TwoPuppysWebp}
              imgAlt="두마리 강아지"
            />
            <S.TextWrapper>
              <h2>
                완전히 새로운 서비스
                <br />
                브리더와 분양자를 이어줍니다
              </h2>
              <p className="sub-title">
                또 하나의 가족이 될 반려견과 분양희망자를 위해 노력합니다
              </p>
              <S.BreederWrapper>
                <h2>브리더란?</h2>
                <p>
                  우수한 견종보존을 위해 동물보호 의식과 견종표준의 이해를
                  기반으로 견종의
                  <br /> 짝짓기, 출산, 질병, 위생 자견분양 등 번식에 전문적인
                  지식을 갖추어
                  <br /> 강아지나 고양이의 혈통을 유지하고 올바르게 번식해
                  애견문화 발전에 기여합니다
                </p>
              </S.BreederWrapper>
            </S.TextWrapper>
          </div>
        </S.InnerContainer>
      </S.Container>
    </S.Service>
  );
};
