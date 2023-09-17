import { FormEvent, useEffect, useRef, useState } from 'react';
import BGIMG from 'assets/images/reserve/subvisual.jpg';
import CERT1 from 'assets/images/breedercert/cert01.png';
import CERT2 from 'assets/images/breedercert/cert02.png';
import CERT1_DESC from 'assets/images/breedercert/cert_desc01.png';
import CERT2_DESC from 'assets/images/breedercert/cert_desc02.png';
import Button, { ButtonSize, ButtonColor, ButtonSubmit } from 'components/common/button/Button';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CardBoxLayout from 'layout/CardBoxLayout';
import { API_PATHS, CONSTANTS } from '../../constants';
import { Toast, ToastOpen } from 'components/common/Toast';
import Radiobutton from 'components/common/radio/Radiobutton';

const TextButton = styled.span`
  cursor: pointer;
`;

const CertSection = styled.section`
  cursor: pointer;
  margin: 20px 0px 106px 0px;
  width: 1152px;
  height: 339px;
  h2 {
    color: #333;
    font-family: Noto Sans KR;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.72px;
    margin-bottom: 20px;
  }
  img {
    width: 155px;
    height: 210px;
  }
  .box {
    position: relative;
    display: flex;
    gap: 100px;
    width: 1152px;
    height: 284px;
    box-sizing: border-box;
    padding: 20px 28px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #969696;
    div {
      position: absolute;
      bottom: 20px;
      right: 30px;
      text-align: right;
      color: #333;
      text-align: right;
      font-family: Noto Sans KR;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.6px;
    }
  }
  ul {
    width: 750px;
    height: 145px;
    color: #333;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px; /* 155% */
    letter-spacing: -0.6px;
    margin-bottom: 80px;
    word-break: keep-all;
    li {
      position: relative;
      &:before {
        content: ' ';
        position: absolute;
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 15px;
        background: #333;
        top: 16px;
        left: -15px;
      }
    }
  }
  button {
    float: right;
    width: 327px;
    font-size: 20px;
    margin-top: 22px;
  }
`;

const FormSection = styled.form`
  cursor: pointer;
  > h2 {
    color: #333;
    font-family: Noto Sans KR;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.72px;
  }
  label {
    color: #333;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.54px;
  }
  .filebox {
    position: relative;
    margin: 10px 0px 0px 20px;
    .upload-name {
      display: inline-block;
      vertical-align: top;
      width: 360px;
      height: 48px;
      padding-left: 20px;
      box-sizing: border-box;
      background: #f5f5f5;
      color: #999999;
      border-radius: 16px;
      margin-right: 18px;
      border: 0px;
    }
    button {
      display: inline-block;
      vertical-align: top;
      width: 240px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      flex-shrink: 0;
      border-radius: 16px;
      background: #4ec1bf;
      color: #fff;
      font-family: Noto Sans KR;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
    label {
      position: absolute;
      width: 360px;
      height: 48px;
      display: block;
      top: 0px;
      left: 0px;
      font-size: 0px;
    }
    input[type='file'] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
  > div {
    display: inline-block;
    vertical-align: middle;
  }
  .radios > div {
    margin: 20px 0px 10px 0px;
    & + div {
      margin-top: 0px;
    }
    label {
      margin-left: 10px;
    }
  }
`;
const Modal = styled.div<{ $height: number }>`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: ${(p) => p.$height + 10 + 'px'};
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0px;
  > div {
    position: relative;
    top: 289px;
    width: 901px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    margin: auto;
    img {
      width: 861px;
    }
    button {
      margin: auto;
    }
  }
`;
export default function Login() {
  const [islogin, setLogin] = useState<boolean>(false);
  const [isOpenModal, setModal] = useState<0 | 1 | 2>(0);
  const [certType, setType] = useState<0 | 1>(0);
  const [docHeight, setHeight] = useState<number>(0);
  const [fileName, setName] = useState<string>('');
  const navigate = useNavigate();
  const imgInput = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const key = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    setLogin(!!key);
    if (!key) {
      navigate('/login');
    }
  }, []);
  const SubmitForm = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (imgInput && imgInput.current?.files) {
      formData.append('verificationFiles', imgInput.current.files[0]);
      formData.append('certification', certType === 0 ? '반려동물종합관리사' : '반려동물행동교정사');
      const { data } = await axios.post(API_PATHS.doVeritication(), formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data.status === 'ERROR' || data.status === 'FAIL') ToastOpen('잠시 후 다시 진행해주세요');
      else {
        if (data.code === 400) {
          if (ToastOpen !== '') ToastOpen('브리더 인증 요청은 브리더에게만 권한이 있습니다');
        } else {
          if (ToastOpen !== '') ToastOpen('제출되었습니다');
        }
      }
    }
  };
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
          <Button
            buttonSize={ButtonSize.MEDIUM}
            buttonColor={ButtonColor.MINT}
            onClick={() => {
              setHeight(document.body.getBoundingClientRect().height);
              setModal(1);
            }}
          >
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
          <Button
            buttonSize={ButtonSize.MEDIUM}
            buttonColor={ButtonColor.MINT}
            onClick={() => {
              setHeight(document.body.getBoundingClientRect().height + 250);
              setModal(2);
            }}
          >
            자격증 취득방법 상세보기
          </Button>
        </CertSection>
        <FormSection>
          <h2>자격증 제출</h2>
          <div className="radios">
            <Radiobutton
              name="certtype"
              text="반려동물 종합관리사"
              label="반려동물종합관리사"
              value={certType === 0}
              onChange={() => {
                setType(0);
              }}
            />
            <Radiobutton
              name="certtype"
              text="반려동물 행동교정사"
              label="반려동물행동교정사"
              value={certType === 1}
              onChange={() => {
                setType(1);
              }}
            />
          </div>
          <div className="filebox">
            <input className="upload-name" defaultValue={fileName} placeholder="첨부파일" />
            <label htmlFor="file">파일찾기</label>
            <input
              type="file"
              id="file"
              ref={imgInput}
              onChange={() => {
                if (imgInput.current?.files) setName(imgInput.current.files[0].name);
              }}
            />
            <Button buttonSize={ButtonSize.SMALL} buttonColor={ButtonColor.MINT} onClick={SubmitForm}>
              제출하기
            </Button>
          </div>
        </FormSection>
      </CardBoxLayout>
      {isOpenModal !== 0 ? (
        <Modal $height={docHeight}>
          <div>
            <img src={isOpenModal === 1 ? CERT1_DESC : CERT2_DESC} />
            <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.MINT} onClick={() => setModal(0)}>
              확인
            </Button>
          </div>
        </Modal>
      ) : (
        ''
      )}
      <Toast />
    </>
  ) : (
    <div style={{ height: '750px' }}></div>
  );
}
