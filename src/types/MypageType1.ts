export interface IMemberInfoAPI {
  status: "SUCCESS" | "FAIL";
  data: {
    id: number;
    email: string;
    nickname: string;
    phoneNumber: string;
    address1: string;
    address2: string;
    verified: boolean;
  };
}

export interface ResultResponse {
  status: "SUCCESS" | "FAIL";
  data: "string";
}

export interface ChangePassword_400_Response {
  status: "SUCCESS" | "FAIL";
  data: ChangePassword_400_Response_data;
}

interface ChangePassword_400_Response_data {
  currentPassword: string | undefined;
  newPassword: string | undefined;
  newPasswordConfirmation: string | undefined;
}

export interface IMeberInfoForm {
  email: string;
  nickname: string;
  phoneNumber: string;
  address1: string;
  address2: string;
}

export interface IChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export interface AvatarResultResponse {
  status: "SUCCESS" | "FAIL";
  data: AvatarData;
}

interface AvatarData {
  id: number;
  fileUrl: string;
}

export interface IChangeAvatar {
  avatar: FileList | null;
}

export interface IIntroductionForm {
  introduction: string;
}

export interface MajordogResultResponse {
  status: "SUCCESS" | "FAIL";
  data: MajordogData[];
}

interface MajordogData {
  id: number;
  name: string;
  imgUrl: string;
}

export interface LivingEnvironmentsResultResponse {
  imgUrl: string;
  spaceType: "LIVING_ROOM" | "BATH_ROOM" | "YARD";
  id: number;
}
