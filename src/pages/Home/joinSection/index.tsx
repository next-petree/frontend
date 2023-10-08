import { styled } from "styled-components";
import breader from "assets/images/main/join_breeder.png";
import breaderAvif from "assets/images/main/join_breeder.avif";
import breaderWebp from "assets/images/main/join_breeder.webp";
import buyer from "assets/images/main/join_hopeful_buyer.png";
import buyerAvif from "assets/images/main/join_hopeful_buyer.avif";
import buyerWebp from "assets/images/main/join_hopeful_buyer.webp";
import Picture from "@component/common/PictureEl";

import * as S from "./style";

export const JoinSection = () => {
  return (
    <S.Join>
      <S.Container>
        <S.InnerContainer>
          <h2>새로운 당신의 가족, 반려동물을 맞이하세요!</h2>
          <p>사랑스러운 반려견을 따뜻한 가족의 품으로 함께 동참하세요!</p>
          <S.ThumbnailCardWrapper>
            <S.ThumbnailCard>
              <div className="thumbnailWrapper">
                <span className="tag">#브리더</span>
                <Picture
                  imgUrl={breader}
                  imgAlt="브리더"
                  avifUrl={breaderAvif}
                  webpUrl={breaderWebp}
                />
              </div>
              <p>
                반려견의 속마음을 <br />잘 아는 브리더
              </p>
            </S.ThumbnailCard>
            <S.ThumbnailCard>
              <div className="thumbnailWrapper">
                <span className="tag">#분양희망자</span>
                <Picture
                  imgUrl={buyer}
                  imgAlt="분양희망자"
                  avifUrl={buyerAvif}
                  webpUrl={buyerWebp}
                />
              </div>
              <p>
                반려견을 잘 케어해 줄 <br />
                분양희망자
              </p>
            </S.ThumbnailCard>
          </S.ThumbnailCardWrapper>
        </S.InnerContainer>
      </S.Container>
    </S.Join>
  );
};

export default JoinSection;
