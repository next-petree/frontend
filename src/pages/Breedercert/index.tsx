import BGIMG from "assets/images/reserve/subvisual.jpg";
import CERT1 from "assets/images/breedercert/cert01.png";
import CERT2 from "assets/images/breedercert/cert02.png";
import * as S from "./style";
import CardBoxLayout from "@pages/Layout/CardBoxLayout";
import Button from "@component/Common/Button";

export default function Breedercert() {
  return (
    <>
      <CardBoxLayout
        bg={BGIMG}
        title={"브리더 인증"}
        subtitle="아래 자격증을 업로드하여 더 전문적인 브리더를 향해 발돋움하실 수 있습니다."
      >
        <S.CertSection>
          <h2>반려동물 종합관리사</h2>
          <div className="box">
            <img src={CERT1} />
            <ul>
              <li>
                반려동물종합관리사는 자격시험은 반려동물전문가로써 반려동물 총론
                및 법 률·행정, 고객 응대 및 서비스,애견 미용 기초, 애견 훈련
                기초, 브리더 윤리 및 번식에 대한 지식을 요구합니다.
              </li>
              <li>단일 등급이며, 누구나 취득할 수 있습니다.</li>
              <li>
                반려동물종합관리사의 취득방법은 한국애견연맹 규정에 의합니다.
              </li>
            </ul>
            <div>
              ※ 자격증 종류 : 등록 민간자격
              <br />※ 자격 등록 번호 : 2017-004402
            </div>
          </div>
          <Button>자격증 취득방법 상세보기</Button>
        </S.CertSection>
        <S.CertSection>
          <h2>반려동물 행동교정사</h2>
          <div className="box">
            <img src={CERT2} />
            <ul>
              <li>
                반려동물행동교정사는 반려동물의 문제 행동을 교정하는 전문가로써
                반려동물행동교정사, 반려동물의 행동, 반려동물 교정이론 및 교육,
                생활법률, 동물보호법, 반려동물 보호자 상담, 반려동물 보호자
                교육에 대한 지식을 요구합니다.
              </li>
              <li>
                반려동물행동교정사 자격증 등급은 3급,2급,1급으로 나누어집니다.
              </li>
              <li>
                반려동물행동교정사의 취득방법은 한국애견연맹 규정에 의합니다.
              </li>
            </ul>
            <div>
              ※ 자격증 종류 : 등록 민간자격
              <br />※ 자격 등록 번호 : 2022-004084
            </div>
          </div>
          <Button>자격증 취득방법 상세보기</Button>
        </S.CertSection>
        <S.FormSection>
          <h2>자격증 제출</h2>
          <div className="radios"></div>
          <div className="filebox">
            <input className="upload-name" placeholder="첨부파일" />
            <label htmlFor="file">파일찾기</label>
            <input type="file" id="file" />
            <Button>제출하기</Button>
          </div>
        </S.FormSection>
      </CardBoxLayout>
    </>
  );
}
