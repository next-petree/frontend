import React from 'react';
import useModal from '../../Modal/Modal';

import {
  CertificateName,
  CertificateWrap,
  CertWrap,
  CertificateImg,
  DescriptionWrap,
  Description1,
  Description2,
  Btn,
  ModalWrap,
  Modal,
} from './CertifyComp1Style';
type CertProps = {
  img: string;
  name: string;
  desc1: string;
  desc2: string;
  desc3: string;
  type: string;
  num: string;
  descImg: string;
};

export default function CertifyComp1(props: CertProps) {
  const { isModalVisible, showModal, hideModal } = useModal();
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
      <Btn onClick={showModal}>자격증 취득방법 상세보기</Btn>
      {isModalVisible && (
        <ModalWrap onClick={hideModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <img
              src={props.descImg}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              alt="자격증 취득 방법"
            />
            <Btn
              style={{
                position: 'relative',
                right: '32%',
              }}
              onClick={hideModal}
            >
              확인
            </Btn>
          </Modal>
        </ModalWrap>
      )}
    </CertificateWrap>
  );
}
