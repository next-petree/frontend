import { SweetAlertIcon } from 'sweetalert2';

const alertList = {
  successMessage: (title: string) => ({
    title: `${title}`,
    icon: 'success' as SweetAlertIcon,
    confirmButtonText: '확인',
    confirmButtonColor: '#4EC1BF',
  }),
  errorMessage: (title: string) => ({
    title: `${title}`,
    icon: 'error' as SweetAlertIcon,
    confirmButtonText: '확인',
    confirmButtonColor: '#4EC1BF',
  }),
  infoMessage: (title: string) => ({
    title: `${title}`,
    icon: 'info' as SweetAlertIcon,
    confirmButtonText: '확인',
    confirmButtonColor: '#4EC1BF',
  }),
  doubleCheckMessage: (title: string) => ({
    title: `${title}`,
    icon: 'info' as SweetAlertIcon,
    showCancelButton: true,
    confirmButtonColor: '#4EC1BF',
    cancelButtonColor: '#2F2F2F',
    confirmButtonText: '네',
    cancelButtonText: '아니요',
  }),

  doubleCheckTitkeMsg: (title: string, text: string) => ({
    title: `${title}`,
    text: `${text}`,
    icon: 'info' as SweetAlertIcon,
    showCancelButton: true,
    confirmButtonColor: '#4EC1BF',
    cancelButtonColor: '#2F2F2F',
    confirmButtonText: '네',
    cancelButtonText: '아니요',
  }),
  customMessage: (title: string, text: string) => ({
    title: `${title}`,
    html: `${text}`,
    icon: 'success' as SweetAlertIcon,
    confirmButtonText: '확인',
    confirmButtonColor: '#4EC1BF',
  }),
};

export default alertList;
