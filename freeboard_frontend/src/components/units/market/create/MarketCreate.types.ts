import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
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
  }>;
  register: UseFormRegister<{
    name: string | undefined;
    remarks: string | undefined;
  }>;
  formState: FormState<{
    name: string | undefined;
    remarks: string | undefined;
  }>;
  onClickEdit: (data: FormValues) => Promise<void>;
  handleChangeQuill: (value: String) => void;
}
