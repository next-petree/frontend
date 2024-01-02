import { useEffect, useState } from "react";
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
  AnswerInput,
  Question,

  // AnswerLength,
  CountSpan,
} from "./Style1";
import useModal from "../../../../../Modal/Modal";
import DogImg from "../../../../../../assets/images/temporaryImg.png";
import CheckModal from "../CheckModal/CheckModal";

const RowModal = ({
  index,
  breed,
  bday,
  name,
}: {
  index: number;
  breed: string;
  bday: string;
  name: string;
}) => {
  const { isModalVisible, showModal, hideModal } = useModal();

  const [inputValue1, setInputValue1] = useState(
    "반려견을 좋아하는 예비 분양자입니다. 현재 강아지 2마리를 키우고 있습니다. 특히 포메라니안을 좋아하는 마음에 신청하게되었습니다.",
  );
  const [inputValue2, setInputValue2] = useState(
    "반려견을 마치 아이처럼 아끼고 보살피겠습니다. 마음으로 나은 아이라는 마음으로  아플때도 한결같이 키울게요~!반려견을 마치 아이처럼 아끼고 보살피겠습니다. 마음으로 나은 아이라는 마음으로  아플때도 한결같이 키울게요~!",
  );
  const [inputCount1, setInputCount1] = useState(0);
  const [inputCount2, setInputCount2] = useState(0);

  const dogName = breed.match(/(.+)(?=\()/g)?.[0] || "";
  const typeofdog = breed.match(/(?<=\().+?(?=\))/g)?.[0] || "";
  useEffect(() => {
    setInputCount1(inputValue1.length);
    setInputCount2(inputValue2.length);
  }, [inputValue1, inputValue2]);
  return (
    <Td>
      <DetailButton onClick={showModal}>상세보기</DetailButton>
      {isModalVisible && (
        <ModalWrap onClick={hideModal}>
          <Modal onClick={e => e.stopPropagation()}>
            <Title>분양 신청서</Title>
            <InfoWrap>
              <Img src={DogImg}></Img>
              <DetailInfoWrap>
                <DogName>{dogName}</DogName>
                <hr />
                <BreedDog>견종 : {typeofdog}</BreedDog>
                <Gender>성별 : 수컷</Gender>
                <BDay>출생일 : {bday}</BDay>
                <hr />
              </DetailInfoWrap>
            </InfoWrap>
            <AnswerWrap>
              <Question>
                1. 반려동물을 분양하려는 사유에 대해 작성하세요.
              </Question>
              <AnswerInput>
                {inputValue1}
                <CountSpan>{inputCount1}/2000</CountSpan>
              </AnswerInput>
            </AnswerWrap>
            <AnswerWrap>
              <Question>
                2. 해당 견종을 분양하는 것에 있어 자신의 마음가짐을
                작성해주세요.
              </Question>
              <AnswerInput>
                {inputValue2}
                <CountSpan>{inputCount2}/2000</CountSpan>
              </AnswerInput>
            </AnswerWrap>
            <CheckModal setHideModal={hideModal} name={name} />
          </Modal>
        </ModalWrap>
      )}
    </Td>
  );
};

export default RowModal;
