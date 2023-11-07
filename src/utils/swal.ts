import { SweetAlertIcon } from "sweetalert2";

const alertList = {
  successMessage: (title: string) => ({
    title: `${title}`,
    icon: "success" as SweetAlertIcon,
    confirmButtonText: "확인",
    confirmButtonColor: "#865DFF",
  }),
  errorMessage: (title: string) => ({
    title: `${title}`,
    icon: "error" as SweetAlertIcon,
    confirmButtonText: "확인",
    confirmButtonColor: "#865DFF",
  }),
  infoMessage: (title: string) => ({
    title: `${title}`,
    icon: "info" as SweetAlertIcon,
    confirmButtonText: "확인",
    confirmButtonColor: "#865DFF",
  }),
  doubleCheckMessage: (title: string) => ({
    title: `${title}`,
    icon: "info" as SweetAlertIcon,
    showCancelButton: true,
    confirmButtonColor: "#865DFF",
    cancelButtonColor: "#959595",
    confirmButtonText: "네",
    cancelButtonText: "아니요",
  }),

  doubleCheckTitkeMsg: (title: string, text: string) => ({
    title: `${title}`,
    text: `${text}`,
    icon: "info" as SweetAlertIcon,
    showCancelButton: true,
    confirmButtonColor: "#865DFF",
    cancelButtonColor: "#959595",
    confirmButtonText: "네",
    cancelButtonText: "아니요",
  }),
};

export default alertList;
