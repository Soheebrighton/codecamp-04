import { ChangeEvent, MouseEvent } from "react";

export interface IPropsRegisterUI {
  onClickHome: () => void;
  emailError: string;
  passwordError: string;
  nameError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickRegister: () => Promise<void>;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: MouseEvent<HTMLButtonElement>) => void;
  values: {
    showPassword: boolean;
  };
  noValidate: any;
}
