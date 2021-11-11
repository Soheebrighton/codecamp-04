import { ChangeEvent } from "react";

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteprops {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteUIprops {
  aaa: (event: ChangeEvent<HTMLInputElement>) => void;
  bbb: (event: ChangeEvent<HTMLInputElement>) => void;
  ccc: (event: ChangeEvent<HTMLInputElement>) => void;
  zzz: () => void;
  xxx: () => void;
  qqq: boolean;
  ggg: boolean;
  data?: any;
}

export interface IStylesprops {
  myQqq: boolean;
}
