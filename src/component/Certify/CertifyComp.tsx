import React, { useEffect, useState } from 'react';
import useModal from '../AlertModal/AlertModal';
import { post } from '../../api/api';
import Cert1 from '../../assets/images/Cert1.png';
import Cert2 from '../../assets/images/Cert2.png';
import certification1 from '../../assets/images/certification1.png';
import certification2 from '../../assets/images/certification2.png';
import DecodeToken from '../../utils/DecodeJWT/DecodeJWT';
import LoginModal from '../Modal/LoginModal';
import {
  CertifyModal,
  Title,
  Desc,
  FormWrap,
  FormTitle,
  Form,
  SubmitBtn,
  InputWrap,
  FileBox,
} from './CertifyStyle';
import CertifyComp1 from './CertifyComp1/CertifyComp1';
import { CertificationResponse } from '../../types/index';

export default function CertifyComp() {
  const { isModalVisible, showModal, hideModal } = useModal();
  const [modalMessage, setModalMessage] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [certificateType, setCertificateType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const data = [
    {
      img: Cert1,
      name: '반려동물 종합관리사',
      desc1:
        '반려동물종합관리사는 자격시험은 반려동물전문가로써 반려동물 총론 및 법률·행정, 고객 응대 및 서비스,애견 미용 기초, 애견 훈련 기초,  브리더 윤리 및 번식에 대한 지식을 요구합니다.',
      desc2: '단일 등급이며, 누구나 취득할 수 있습니다.',
      desc3: '반려동물종합관리사의 취득방법은 한국애견연맹 규정에 의합니다.',
      type: ' 등록 민간자격',
      num: '2017-004402호',
      descImg: certification1,
    },
    {
      img: Cert2,
      name: '반려동물 행동교정사',
      desc1:
        '반려동물행동교정사는 반려동물의 문제 행동을 교정하는 전문가로써 반려동물행동교정사, 반려동물의 행동, 반려동물 교정이론 및 교육, 생활법률, 동물보호법, 반려동물 보호자 상담, 반려동물 보호자 교육에 대한 지식을 요구합니다.',
      desc2: '반려동물행동교정사 자격증 등급은 3급,2급,1급으로 나누어집니다.',
      desc3: '반려동물행동교정사의 취득방법은 한국애견연맹 규정에 의합니다.',
      type: ' 등록 민간자격',
      num: '2022-004084호',
      descImg: certification2,
    },
  ];
  const postFile = async () => {
    try {
      const formData = new FormData();
      formData.append('certification', certificateType.replace(/ /g, ''));
      formData.append('verificationFiles', selectedFile || '');

      const response = await post<CertificationResponse>(
        '/verifications',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === 'SUCCESS') {
        setModalMessage('제출되었습니다');
        showModal();
      } else if (
        response.data.data.message === '이미 해당 자격증을 업로드했습니다.'
      ) {
        setModalMessage('이미 해당 자격증을 업로드 했습니다.');
        showModal();
      } else {
        setModalMessage('브리더가 아닙니다.');
        showModal();
      }
    } catch (error: any) {
      console.error('There was an error!', error);
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const handleStartTest = () => {
      if (!isLoggedIn) {
        window.scroll({ top: 0, behavior: 'smooth' }); // 스크롤을 페이지 상단으로 이동
        setShowLoginModal(true);
        setErrorMessage('서비스 이용을 위해 로그인을 하세요.'); // 에러 메시지 설정
      } else {
        const getUser = DecodeToken();
        if (!getUser) {
          window.scroll({ top: 0, behavior: 'smooth' }); // 스크롤을 페이지 상단으로 이동
          setShowLoginModal(true);
          setErrorMessage('서비스 이용을 위해 로그인을 하세요.'); // 에러 메시지 설정
        }
        if (getUser.role === 'BREEDER') {
          if (selectedFile && certificateType) {
            const formData = new FormData();
            formData.append('certification', certificateType);
            formData.append('verificationFiles', selectedFile);

            postFile();
          } else {
            if (!selectedFile) {
              setModalMessage('브리더 자격증을 업로드 하세요');
            } else if (!certificateType) {
              setModalMessage('자격증을 선택하세요');
            }
            showModal();
          }
        } else if (getUser.role === 'ADOPTER') {
          window.scroll({ top: 0, behavior: 'smooth' }); // 스크롤을 페이지 상단으로 이동
          setShowLoginModal(true);
          setErrorMessage('브리더 계정이 아닙니다.'); // 에러 메시지 설정
        }
      }
    };
    handleStartTest();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertificateType(e.target.value);
  };

  return (
    <>
      {showLoginModal && (
        <LoginModal
          top={'4'}
          onLogin={() => setIsLoggedIn(true)}
          onClose={() => setShowLoginModal(false)}
          errorMessage={errorMessage} // 에러 메시지 prop 전달
        />
      )}
      {isModalVisible && (
        <div
          style={{
            width: '409px',
            height: '109px',
            borderRadius: '32px',
            background: '#fff',
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.1)',
            fontSize: '20px',
          }}
        >
          {modalMessage}
        </div>
      )}
      <CertifyModal>
        <div>
          <Title>브리더 인증</Title>
          <Desc>
            아래 자격증을 업로드하여 더 전문적인 브리더를 향해 발돋움 하실 수
            있습니다.
          </Desc>
        </div>
        {data.map((v, i) => {
          return (
            <CertifyComp1
              key={i}
              img={v.img}
              name={v.name}
              desc1={v.desc1}
              desc2={v.desc2}
              desc3={v.desc3}
              type={v.type}
              num={v.num}
              descImg={v.descImg}
            ></CertifyComp1>
          );
        })}
        <FormWrap>
          <FormTitle>자격증 제출</FormTitle>
          <Form id="submit" onSubmit={handleSubmit}>
            <InputWrap>
              <label>
                반려동물 종합관리사
                <input
                  type="radio"
                  name="certificate"
                  value="반려동물 종합관리사"
                  onChange={handleRadioChange}
                />
              </label>
              <label>
                반려동물 행동교정사
                <input
                  type="radio"
                  name="certificate"
                  value="반려동물 행동교정사"
                  onChange={handleRadioChange}
                />
              </label>
            </InputWrap>
            <FileBox className="filebox">
              {selectedFileName ? (
                <label htmlFor="file">{selectedFileName}</label> // 선택된 파일명 보여주기
              ) : (
                <label htmlFor="file">파일찾기</label> // 파일이 선택되지 않은 경우 "파일찾기" 보여주기
              )}
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />{' '}
              {/* 선택된 파일 이름 보여주기 */}
            </FileBox>
            <SubmitBtn type="submit" value="제출하기" />
          </Form>
        </FormWrap>
      </CertifyModal>
    </>
  );
}
