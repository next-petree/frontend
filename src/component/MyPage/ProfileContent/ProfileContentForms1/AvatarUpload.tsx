import { useForm } from "react-hook-form";
import {
  Avatar,
  AvatarBox,
  AvatarDeleteBtn,
  AvatarInput,
  AvatarLabel,
  Button,
  Form,
  ImageDeleteBtn,
  Overlay,
  Store,
  UploadAvatarBorder,
} from "./Styles1";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import alertList from "../../../../utils/Swal1";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  AvatarResultResponse,
  IChangeAvatar,
} from "../../../../types/MypageType1";
import { AvatarUrl } from "../../../../utils/MypageUrl1";
import { post } from "../../../../api/api";
import {
  selectAvatarSlice,
  setAvatar,
} from "../../../../redux/Mypage1/AvatarSlice1";
import React from "react";

interface IAvatarUpload {
  setChangeAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarUpload = ({ setChangeAvatar }: IAvatarUpload) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const nowavatar = useAppSelector(selectAvatarSlice);
  const dispath = useAppDispatch();
  const [avatarPreview, setAvatarPreview] = useState(nowavatar.avatar);
  const avatar = watch("avatar");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);
  const onDelete = () => {
    setValue("avatar", "");
    setAvatarPreview("");
  };
  const onValid = async () => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("프로필 사진은 변경하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      // post가 제대로 보내지지 않음
      try {
        const url = AvatarUrl("post");
        const response = await post<AvatarResultResponse>(url, {
          image: avatarPreview,
        });
        if (response.data.status === "FAIL") {
          throw "올바르지 못한 접근 입니다.";
        }
        dispath(setAvatar(response.data.data.fileUrl));
      } catch (e) {}
    }
    setChangeAvatar(false);
  };
  return (
    <Overlay>
      <AvatarBox>
        <Form onSubmit={handleSubmit(onValid)}>
          {avatarPreview !== "" ? (
            <>
              <UploadAvatarBorder>
                <Avatar src={avatarPreview} alt="" />
              </UploadAvatarBorder>
              <AvatarDeleteBtn onClick={onDelete}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="18" fill="black" />
                  <rect
                    x="23.6567"
                    y="10.2227"
                    width="3"
                    height="19"
                    rx="1.5"
                    transform="rotate(45 23.6567 10.2227)"
                    fill="white"
                  />
                  <rect
                    x="25.7783"
                    y="23.6602"
                    width="3"
                    height="19"
                    rx="1.5"
                    transform="rotate(135 25.7783 23.6602)"
                    fill="white"
                  />
                </svg>
              </AvatarDeleteBtn>
            </>
          ) : (
            <UploadAvatarBorder>
              <AvatarLabel htmlFor="avatar">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="-1.6 -1.6 19.20 19.20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                    <rect
                      x="-1.6"
                      y="-1.6"
                      width="19.20"
                      height="19.20"
                      rx="9.6"
                      fill="#9c9c9c"
                      strokeWidth="0"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
                      fill="#686868"
                    ></path>{" "}
                  </g>
                </svg>
              </AvatarLabel>
              <AvatarInput
                id="avatar"
                type="file"
                accept="image/*"
                {...register("avatar")}
              />
            </UploadAvatarBorder>
          )}
          <Store>
            <Button $isLong={true}>저장</Button>
          </Store>
        </Form>
      </AvatarBox>
    </Overlay>
  );
};
export default AvatarUpload;
