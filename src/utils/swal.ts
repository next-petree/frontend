import { SweetAlertIcon } from "sweetalert2";

const alertList = {
  successMessage: (title: string) => ({
    title: `${title}`,
    icon: "success" as SweetAlertIcon,
    confirmButtonText: "확인",
    confirmButtonColor: "#4ec1bf",
  }),
  errorMessage: (title: string) => ({
    title: `${title}`,
    icon: "error" as SweetAlertIcon,
    confirmButtonText: "확인",
    confirmButtonColor: "#4ec1bf",
  }),
  infoMessage: (title: string) => ({
    title: `${title}`,
    icon: "info" as SweetAlertIcon,
    confirmButtonText: "확인",
    confirmButtonColor: "#4ec1bf",
  }),
  doubleCheckMessage: (title: string) => ({
    title: `${title}`,
    icon: "info" as SweetAlertIcon,
    showCancelButton: true,
    confirmButtonColor: "#4ec1bf",
    cancelButtonColor: "#b7b7b7",
    confirmButtonText: "네",
    cancelButtonText: "아니요",
  }),

  doubleCheckTitkeMsg: (title: string, text: string) => ({
    title: `${title}`,
    text: `${text}`,
    icon: "info" as SweetAlertIcon,
    showCancelButton: true,
    confirmButtonColor: "#4ec1bf",
    cancelButtonColor: "#b7b7b7",
    confirmButtonText: "네",
    cancelButtonText: "아니요",
  }),
};

export default alertList;
