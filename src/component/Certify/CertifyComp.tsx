import React from 'react';
import PetreeBrown from '../../assets/images/PetreeBrown.png';
import PetreeIconBrown from '../../assets/images/PetreeIconBrown.png';
import Header from '../Header/Header';
import Cert1 from '../../assets/images/Cert1.png';
import Cert2 from '../../assets/images/Cert2.png';
import {
  Petree,
  PetreeIcon,
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

export default function CertifyComp() {
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
    },
  ];
  return (
    <>
      <PetreeIcon src={PetreeIconBrown}></PetreeIcon>
      <Petree src={PetreeBrown}></Petree>
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
            ></CertifyComp1>
          );
        })}
        <FormWrap>
          <FormTitle>자격증 제출</FormTitle>
          <Form id="submit">
            <InputWrap>
              <label>
                반려동물 종합관리사
                <input type="radio" name="certificate" />
              </label>
              <label>
                반려동물 행동교정사
                <input type="radio" name="certificate" />
              </label>
            </InputWrap>
            <FileBox className="filebox">
              <label htmlFor="file">파일찾기</label>
              {/* 파일명 들어가게 해야됨! */}
              <input type="file" id="file" />
            </FileBox>
            <SubmitBtn type="submit" value="제출하기" />
          </Form>
        </FormWrap>
      </CertifyModal>
    </>
  );
}
