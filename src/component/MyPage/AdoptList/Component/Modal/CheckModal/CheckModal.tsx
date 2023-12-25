import { useState, useEffect } from "react";
import { BtnWrap, Modal, ModalWrap } from "./Style1";
import Button from "../../Button/Button";
import useModal from "../../../../../Modal/Modal";
import Swal from "sweetalert2";
import alertList from "../../../../../../utils/Swal1";

interface CheckModalProps {
  setHideModal: () => void;
  name: string;
}
export default function CheckModal({ setHideModal, name }: CheckModalProps) {
  const { isModalVisible, showModal, hideModal, modalContent } = useModal();

  return (
    <BtnWrap>
      <Button
        bgcolor={"#4EC1BF"}
        buttonwidth={"200px"}
        buttonheight={"40px"}
        onClick={() => {
          setHideModal(); // 모달을 닫습니다.
          Swal.fire(
            alertList.customMessage(
              "승인되었습니다.",
              `분양희망자:${name}<br>연락처 : 010-1010-1010`,
            ),
          );
        }}
      >
        승인하기
      </Button>
      {isModalVisible && (
        <ModalWrap onClick={hideModal}>
          <Modal onClick={e => e.stopPropagation()}>
            <div>{modalContent}</div>
            <button onClick={hideModal}>닫기</button>
          </Modal>
        </ModalWrap>
      )}
      <Button
        bgcolor={"#2F2F2F"}
        buttonwidth={"200px"}
        buttonheight={"40px"}
        onClick={() => {
          setHideModal();
          Swal.fire(alertList.errorMessage("해당 신청서를 거절하였습니다."));
        }}
      >
        거절하기
      </Button>
    </BtnWrap>
  );
}
