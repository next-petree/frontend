export const setToken = (token: string, value: string) => {
  sessionStorage.setItem(token, value);
};
export const getToken = (token: string) => {
  return sessionStorage.getItem(token);
};
export const removeToken = (token: string) => {
  sessionStorage.removeItem(token);
};
