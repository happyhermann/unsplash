import { atom } from "recoil";

export const keyword = atom<any>({
  key: "keyword",
  default: "",
});
