import { atom } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0, // 초기값
});
