import React from 'react';
import {
  CertificateName,
  CertificateWrap,
  CertWrap,
  CertificateImg,
  DescriptionWrap,
  Description1,
  Description2,
  Btn,
} from './CertifyComp1Style';
type CertProps = {
  img: string;
  name: string;
  desc1: string;
  desc2: string;
  desc3: string;
  type: string;
  num: string;
};

export default function CertifyComp1(props: CertProps) {
  return (
    <CertificateWrap>
      <CertificateName>{props.name}</CertificateName>
      <CertWrap>
        <CertificateImg src={props.img}></CertificateImg>
        <DescriptionWrap>
          <Description1>
            <li>{props.desc1}</li>
            <li>{props.desc2}</li>
            <li>{props.desc3}</li>
          </Description1>
          <Description2>
            <li>&#8251;자격증 종류 : {props.type}</li>
            <li>&#8251;자격 등록 번호 : {props.num}</li>
          </Description2>
        </DescriptionWrap>
      </CertWrap>
      <Btn>자격증 취득방법 상세보기</Btn>
    </CertificateWrap>
  );
}
