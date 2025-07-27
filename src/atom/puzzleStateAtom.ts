import { atom } from "recoil";

export const puzzleStatus = atom({
  key: 'isComplete', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});