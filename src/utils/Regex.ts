export const inputRegexs = {
  emailRegex: /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/,
  passwordRegex: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  phoneNumberRegex: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
  nicknameRegex: /^[가-힣a-zA-Z]{2,10}/,
};
