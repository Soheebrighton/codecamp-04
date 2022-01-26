import { ChangeEvent, MouseEvent } from "react";

export interface IPropsLoginUI {
  onClickHome: () => void;
  emailError: string;
  passwordError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: MouseEvent<HTMLButtonElement>) => void;
  values: {
    showPassword: boolean;
  };
  onClickLogin: () => Promise<void>;
  onClickRegister: () => void;
}
