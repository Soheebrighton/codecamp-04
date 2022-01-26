import { ChangeEvent } from "react";

export interface IPropsLoginUI {
  onClickHome: () => void;
  emailError: string;
  passwordError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
