import { atom } from "recoil";
import { IGetRes } from "./routes/Home";

export const keyword = atom<any>({
  key: "keyword",
  default: [],
});
