import { useState, useEffect } from 'react';
import { BtnWrap, Modal, ModalWrap } from './style';
import Button from '../../Button/Button';
import useModal from '../../../../../Modal/Modal';
import Swal from 'sweetalert2';
import alertList from '../../../../../../utils/swal';

interface CheckModalProps {
  setHideModal: () => void;
}
export default function CheckModal({ setHideModal }: CheckModalProps) {
  const { isModalVisible, showModal, hideModal, modalContent } = useModal();

  return (
    <BtnWrap>
      <Button
        bgColor={'#4EC1BF'}
        buttonWidth={'200px'}
        buttonHeight={'40px'}
        onClick={() => {
          setHideModal(); // 모달을 닫습니다.
          Swal.fire(
            alertList.customMessage(
              '승인되었습니다.',
              '분양희망자:수현<br>연락처 : 010-1010-1010'
            )
          );
        }}
      >
        승인하기
      </Button>
      {isModalVisible && (
        <ModalWrap onClick={hideModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <div>{modalContent}</div>
            <button onClick={hideModal}>닫기</button>
          </Modal>
        </ModalWrap>
      )}
      <Button
        bgColor={'#2F2F2F'}
        buttonWidth={'200px'}
        buttonHeight={'40px'}
        onClick={() => {
          setHideModal();
          Swal.fire(alertList.errorMessage('해당 신청서를 거절하였습니다.'));
        }}
      >
        거절하기
      </Button>
    </BtnWrap>
  );
}
