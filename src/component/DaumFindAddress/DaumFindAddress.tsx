import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  setRoadAddress,
  setDetailAddress,
  selectAddressSlice,
} from "../../redux/Address/AddressSlice";
import {
  Container,
  RegionSelectorInputTop,
  RegionSelectorInput,
  RegionSearchButton,
  RegionSelctorInputBottom,
  RegionSectorDetailInput,
} from "./DaumFindAddressStyle";

const DaumFindAddress = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { roadAddress, detailAddress } = useSelector(selectAddressSlice);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const completeHandler = (data: any) => {
    dispatch(setRoadAddress(data.roadAddress));
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDetailAddress(e.target.value));
  };

  return (
    <Container>
      <RegionSelectorInputTop>
        <RegionSelectorInput value={roadAddress} readOnly placeholder="주소" />
        <RegionSearchButton onClick={toggle}>주소검색</RegionSearchButton>
      </RegionSelectorInputTop>

      <RegionSelctorInputBottom>
        <RegionSectorDetailInput
          type="text"
          onChange={changeHandler}
          value={detailAddress}
          placeholder="상세주소"
        />
      </RegionSelctorInputBottom>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <DaumPostcode onComplete={completeHandler} />
      </Modal>
    </Container>
  );
};

export default DaumFindAddress;
