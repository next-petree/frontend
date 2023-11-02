export const setToken = (token: string, value: string) => {
  localStorage.setItem(token, value);
};
export const getToken = (token: string) => {
  return localStorage.getItem(token);
};
export const removeToken = (token: string) => {
  localStorage.removeItem(token);
};
