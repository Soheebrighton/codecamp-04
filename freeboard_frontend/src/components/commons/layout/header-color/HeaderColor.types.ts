export interface IPropsHeaderColor {
  bar: boolean;
  colorChange: boolean;
  colorChangeTxt: boolean;
  colorChangeLogo: boolean;
  onClickHome: () => void;
  onClickCommunity: () => void;
  onClickSingUp: () => void;
  onClickLogIn: () => void;
  onClickShop: () => void;
  onClickMyPage: () => void;
}

export interface IPropsHeader {
  colorChange: boolean;
  colorChangeTxt: boolean;
  bar: boolean;
}
