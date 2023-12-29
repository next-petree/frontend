import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  setNickname,
  setNicknameCheck,
} from "../../../redux/Register/CheckNicknameSlice";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";
import { get } from "../../../api/api";
import { CertificationCheckResponse } from "../../../types/authType";

import {
  NickNameArea,
  NickNameTextArea,
  NickNameText,
  NickNameInfomationText,
  NickNameInputArea,
  NickNameInput,
  NickNameCheckButton,
} from "../RegisterContentDetail/RegisterContentDetailStyle";

const NicknameContent = () => {
  const dispatch = useDispatch();
  const nickname = useSelector((state: RootState) => state.nickname.nickname);

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickname(e.target.value));
    dispatch(setNicknameCheck(false));
  };

  const handleNickNameCheck = async () => {
    if (!nickname) {
      Swal.fire(alertList.infoMessage("닉네임을 입력해주세요"));
      return;
    }

    try {
      const response = await get<CertificationCheckResponse>("nickname/check", {
        params: { nickname },
      });

      if (response.data.status === "SUCCESS") {
        dispatch(setNicknameCheck(true));

        Swal.fire(alertList.successMessage("사용 가능한 닉네임입니다."));
      } else {
        dispatch(setNicknameCheck(false));

        Swal.fire(alertList.errorMessage("이미 사용 중인 닉네임입니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("닉네임 중복 확인 중 오류가 발생했습니다."),
      );
    }
  };
  return (
    <NickNameArea>
      <NickNameTextArea>
        <NickNameText>닉네임</NickNameText>
        <NickNameInfomationText>2~10자 이내</NickNameInfomationText>
      </NickNameTextArea>
      <NickNameInputArea>
        <NickNameInput
          type="text"
          placeholder="닉네임 검색"
          onChange={handleNickNameChange}
        />
        <NickNameCheckButton onClick={handleNickNameCheck}>
          중복확인
        </NickNameCheckButton>
      </NickNameInputArea>
    </NickNameArea>
  );
};

export default NicknameContent;
