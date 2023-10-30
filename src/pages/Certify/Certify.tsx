import React from 'react';
import PetreeBrown from '../../assets/images/PetreeBrown.png';
import PetreeIconBrown from '../../assets/images/PetreeIconBrown.png';
import {
  Wrapper,
  Header,
  Banner,
  Petree,
  PetreeIcon,
  CertificateImg,
  CertWrap,
  CertificateName,
  CertificateWrap,
  CertifyModal,
  DescriptioWrap,
  Description1,
  Description2,
  Btn,
  Title,
  Info,
} from './CertifyStyle';

export default function Certify() {
  return (
    <Wrapper>
      <Header>header</Header>
      <Banner>
        <PetreeIcon src={PetreeIconBrown}></PetreeIcon>
        <Petree src={PetreeBrown}></Petree>
      </Banner>
      <CertifyModal>
        <Title>title</Title>
        <Info>설명</Info>
        <CertificateWrap>
          <CertificateName>반려동물 종합관리사</CertificateName>
          <CertWrap>
            <CertificateImg></CertificateImg>
            <DescriptioWrap>
              <Description1>반려동물종합관리사는~~~</Description1>
              <Description2>자격증 종류 : 등록 민간자격</Description2>
            </DescriptioWrap>
          </CertWrap>
          <Btn>자격증 상세보기</Btn>
        </CertificateWrap>
        <form id="submit">
          <label>
            반려동물 종합관리사
            <input type="radio" name="certificate" />
          </label>
          <label>
            반려동물 행동교정사
            <input type="radio" name="certificate" />
          </label>
          <input type="file" />
          <input type="submit" />
        </form>
      </CertifyModal>
    </Wrapper>
  );
}
