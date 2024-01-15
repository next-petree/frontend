import React, { useState } from "react";
import { get } from "../../../../../../api/api";
import {
  Td,
  DetailButton,
  Modal,
  ModalWrap,
  Title,
  InfoWrap,
  Img,
  DetailInfoWrap,
  DogName,
  BreedDog,
  Gender,
  BDay,
  AnswerWrap,
  AnswerTextBox,
  Question,
  CountSpan,
} from "./Style1";
import useModal from "../../../../../Modal/Modal";
import CheckModal from "../CheckModal/CheckModal";

type ModalDataType = {
  imgUrl: string;
  name: string;
  breedType: string;
  gender: string;
  birthDate: string;
  nurturingEnv: string;
  parentExp: string;
};

type ApiResponse = {
  status: string;
  data: {
    body: {
      data: ModalDataType;
    };
  };
};

const RowModal = ({ matchingId }: { matchingId: number }) => {
  const [modalData, setModalData] = useState<ModalDataType | null>(null);
  const { isModalVisible, showModal, hideModal } = useModal();

  const fetchAndShowModal = async () => {
    try {
      const response = await get<ApiResponse>(`/me/matchings/${matchingId}`);
      setModalData(response.data.data.body.data);
      showModal();
    } catch (error) {
      console.error("매칭 상세 조회 중 오류 발생:", error);
    }
  };

  return (
    <Td>
      <DetailButton onClick={fetchAndShowModal}>상세보기</DetailButton>
      {isModalVisible && (
        <ModalWrap onClick={hideModal}>
          <Modal onClick={e => e.stopPropagation()}>
            <Title>분양 신청서</Title>
            <InfoWrap>
              <Img src={modalData?.imgUrl}></Img>
              <DetailInfoWrap>
                <DogName>{modalData?.name}</DogName>
                <hr />
                <BreedDog>견종 : {modalData?.breedType}</BreedDog>
                <Gender>성별 : {modalData?.gender}</Gender>
                <BDay>출생일 : {modalData?.birthDate}</BDay>
                <hr />
              </DetailInfoWrap>
            </InfoWrap>
            <AnswerWrap>
              <Question>
                1. 반려동물을 분양하려는 사유에 대해 작성하세요.
              </Question>
              <AnswerTextBox>
                {modalData?.nurturingEnv}
                <CountSpan>{modalData?.nurturingEnv.length}/2000</CountSpan>
              </AnswerTextBox>
            </AnswerWrap>
            <AnswerWrap>
              <Question>
                2. 해당 견종을 분양하는 것에 있어 자신의 마음가짐을
                작성해주세요.
              </Question>
              <AnswerTextBox>
                {modalData?.parentExp}
                <CountSpan>{modalData?.parentExp.length}/2000</CountSpan>
              </AnswerTextBox>
            </AnswerWrap>
            <CheckModal
              setHideModal={hideModal}
              name={modalData?.name || ""}
              matchingId={matchingId}
            />
          </Modal>
        </ModalWrap>
      )}
    </Td>
  );
};

export default RowModal;
