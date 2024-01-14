import { BtnWrap, Modal, ModalWrap } from "./Style1";
import Button from "../../Button/Button";
import useModal from "../../../../../Modal/Modal";
import Swal from "sweetalert2";
import alertList from "../../../../../../utils/Swal1";
import { post } from "../../../../../../api/api";

interface CheckModalProps {
  setHideModal: () => void;
  name: string;
  matchingId: number;
}
export default function CheckModal({
  setHideModal,
  name,
  matchingId,
}: CheckModalProps) {
  const { isModalVisible, hideModal, modalContent } = useModal();

  const handleApproval = async (isApproved: boolean) => {
    try {
      await post(
        `/me/matchings/${matchingId}/approval?isApproved=${isApproved}`,
      );

      Swal.fire(
        alertList.customMessage(
          "처리되었습니다.",
          `분양희망자: ${name}<br>상태: ${isApproved ? "승인됨" : "거절됨"}`,
        ),
      );
    } catch (error) {
      console.error("매칭 신청 처리 중 오류 발생:", error);
      Swal.fire(alertList.errorMessage("처리 중 오류가 발생했습니다."));
    }
  };

  return (
    <BtnWrap>
      <Button
        bgcolor={"#4EC1BF"}
        buttonwidth={"200px"}
        buttonheight={"40px"}
        onClick={() => {
          setHideModal();
          handleApproval(true);
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
          handleApproval(false);
          Swal.fire(alertList.errorMessage("해당 신청서를 거절하였습니다."));
        }}
      >
        거절하기
      </Button>
    </BtnWrap>
  );
}
