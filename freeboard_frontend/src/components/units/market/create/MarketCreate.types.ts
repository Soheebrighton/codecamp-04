import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormGetValues,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FormValues {
  email: string;
  password: string;
}

export interface IPropsMarketCreateUI {
  dataForFetch?: Pick<IQuery, "fetchUseditem">;
  onClickSubmit: (data: FormValues) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<{
    name: string | undefined;
    remarks: string | undefined;
    contents: string | undefined;
  }>;
  register: UseFormRegister<{
    name: string | undefined;
    remarks: string | undefined;
    price: Maybe<number>;
  }>;
  formState: FormState<{
    name: string | undefined;
    remarks: string | undefined;
    contents: string | undefined;
    price?: any;
    tags?: any;
  }>;
  onClickEdit: (data: FormValues) => Promise<void>;
  handleChangeQuill: (value: String) => void;
  tags: any;
  setTags: Dispatch<SetStateAction<string[]>>;
  handleComplete: (data: any) => void;
  onChangeOptionalAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  address: string;
  zipcode: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  lat: number;
  lng: number;
  setLat: Dispatch<SetStateAction<number>>;
  setLng: Dispatch<SetStateAction<number>>;
  onToggleModal: () => void;
  isOpen: boolean;
  getValues: UseFormGetValues<{
    name: string | undefined;
    remarks: string | undefined;
    price: Maybe<number>;
  }>;
}
