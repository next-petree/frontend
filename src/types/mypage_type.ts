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
