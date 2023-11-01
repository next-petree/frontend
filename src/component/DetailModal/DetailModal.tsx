import { AiFillCloseCircle } from "react-icons/ai";

import { IMG4 } from "../../assets/images";
import { IDMProps } from "../../types";
import * as S from "./styles";

const DetailModal = ({ onClick }: IDMProps) => {
  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.DetailInfoFlexBox>
          <S.DogImage src={IMG4} alt="" />
          <S.DetailInfoContainer>
            <S.NameContainer>루카스</S.NameContainer>
            <S.DetailInfo>
              <S.DetailInfoText>견종: 포메라니안</S.DetailInfoText>
              <S.DetailInfoText>성별: 수컷</S.DetailInfoText>
              <S.DetailInfoText>출생일: 2023.05.23</S.DetailInfoText>
              <S.DetailInfoText>브리더명: 수현</S.DetailInfoText>
            </S.DetailInfo>
          </S.DetailInfoContainer>
        </S.DetailInfoFlexBox>
        <S.DetailInfoFlexBox>
          <S.DogImageGroup>
            <S.SmallDogImageBox>
              <img
                src={IMG4}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </S.SmallDogImageBox>
            <S.SmallDogImageBox>
              <img
                src={IMG4}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </S.SmallDogImageBox>
            <S.SmallDogImageBox>
              <img
                src={IMG4}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </S.SmallDogImageBox>
            <S.SmallDogImageBox>
              <img
                src={IMG4}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </S.SmallDogImageBox>
          </S.DogImageGroup>
          <S.Button>예약하기</S.Button>
        </S.DetailInfoFlexBox>
        <S.DetailDescContainer>
          <S.DetailDescTitle>상세설명</S.DetailDescTitle>
          <S.DetailDesc>
            온순한 시바견입니다.{"\n"}
            2살 정도 되었고 활달하고 강아지 껌을 좋아합니다.{"\n"}
            장난치는 것을 좋아합니다.{"\n"}
            털관리를 자주 해야합니다.
          </S.DetailDesc>
        </S.DetailDescContainer>
      </S.ModalContainer>
      <S.ClosebtnContainer onClick={onClick}>
        <AiFillCloseCircle style={{ width: "44px", height: "44px" }} />
      </S.ClosebtnContainer>
    </S.ModalWrapper>
  );
};

export default DetailModal;
