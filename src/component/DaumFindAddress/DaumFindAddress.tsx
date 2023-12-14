import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import {
  Container,
  RegionSelectorInputTop,
  RegionSelectorInput,
  RegionSearchButton,
  RegionSelctorInputBottom,
  RegionSectorDetailInput,
} from "./DaumFindAddressStyle";

const DaumFindAddress = () => {
  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const completeHandler = (data: any) => {
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const clickHandler = () => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
    } else {
      console.log(zipCode, roadAddress, detailAddress);
    }
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
