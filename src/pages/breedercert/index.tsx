import { useEffect, useRef, useState } from 'react';
import BGIMG from 'assets/images/reserve/subvisual.jpg';
import CERT1 from 'assets/images/breedercert/cert01.png';
import CERT2 from 'assets/images/breedercert/cert02.png';
import CERT1_DESC from 'assets/images/breedercert/cert_desc01.png';
import CERT2_DESC from 'assets/images/breedercert/cert_desc02.png';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CardBoxLayout from 'layout/CardBoxLayout';
import { API_PATHS, CONSTANTS } from '../../constants';

const TextButton = styled.span`
  cursor: pointer;
`;

const CertSection = styled.section`
  cursor: pointer;
`;

const FormSection = styled.form`
  cursor: pointer;
`;
const Modal = styled.div`
  cursor: pointer;
`;
export default function Login() {
  const [islogin, setLogin] = useState<boolean>(false);
  const [isOpenModal, setModal] = useState<0 | 1 | 2>(0);
  const loginForm = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const key = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    setLogin(!!key);
    console.log('params', params);
    if (!key) {
      navigate('/login');
    }
  }, []);
  return islogin ? (
    <>
      <CardBoxLayout
        bg={BGIMG}
        title={'브리더 인증'}
        subtitle="아래 자격증을 업로드하여 더 전문적인 브리더를 향해 발돋움하실 수 있습니다."
      >
        <CertSection>
          <h2>반려동물 종합관리사</h2>
          <div className="box">
            <img src={CERT1} />
            <ul>
              <li>
                반려동물종합관리사는 자격시험은 반려동물전문가로써 반려동물 총론 및 법 률·행정, 고객 응대 및 서비스,애견
                미용 기초, 애견 훈련 기초, 브리더 윤리 및 번식에 대한 지식을 요구합니다.
              </li>
              <li>단일 등급이며, 누구나 취득할 수 있습니다.</li>
              <li>반려동물종합관리사의 취득방법은 한국애견연맹 규정에 의합니다.</li>
            </ul>
            <div>
              ※ 자격증 종류 : 등록 민간자격
              <br />※ 자격 등록 번호 : 2017-004402
            </div>
          </div>
          <Button buttonSize={ButtonSize.SMALL} buttonColor={ButtonColor.MINT} onClick={() => setModal(1)}>
            자격증 취득방법 상세보기
          </Button>
        </CertSection>
        <CertSection>
          <h2>반려동물 행동교정사</h2>
          <div className="box">
            <img src={CERT2} />
            <ul>
              <li>
                반려동물행동교정사는 반려동물의 문제 행동을 교정하는 전문가로써 반려동물행동교정사, 반려동물의 행동,
                반려동물 교정이론 및 교육, 생활법률, 동물보호법, 반려동물 보호자 상담, 반려동물 보호자 교육에 대한
                지식을 요구합니다.
              </li>
              <li>반려동물행동교정사 자격증 등급은 3급,2급,1급으로 나누어집니다.</li>
              <li>반려동물행동교정사의 취득방법은 한국애견연맹 규정에 의합니다.</li>
            </ul>
            <div>
              ※ 자격증 종류 : 등록 민간자격
              <br />※ 자격 등록 번호 : 2022-004084
            </div>
          </div>
          <Button buttonSize={ButtonSize.SMALL} buttonColor={ButtonColor.MINT} onClick={() => setModal(2)}>
            자격증 취득방법 상세보기
          </Button>
        </CertSection>
        <FormSection ref={loginForm}>
          <label>자격증 제출</label>
          <input type="file" name="file" />
          <Button
            buttonSize={ButtonSize.SMALL}
            buttonColor={ButtonColor.MINT}
            onClick={() => (loginForm ? console.log('loginForm', loginForm) : '')}
          >
            제출하기
          </Button>
        </FormSection>
      </CardBoxLayout>
      {isOpenModal !== 0 ? (
        <Modal>
          <div>
            <img src={isOpenModal === 1 ? CERT1_DESC : CERT2_DESC} />
            <Button buttonSize={ButtonSize.SMALL} buttonColor={ButtonColor.MINT} onClick={() => setModal(0)}>
              확인
            </Button>
          </div>
        </Modal>
      ) : (
        ''
      )}
    </>
  ) : (
    <div style={{ height: '750px' }}></div>
  );
}
