import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다"),
  contents: yup.string().required("필수 입력 사항입니다"),
  price: yup
    .number()
    .typeError("숫자만 입력가능합니다.")
    .required("필수 입력 사항입니다"),
  // tags: yup.string().required("필수 입력 사항입니다."),
});

export const schemaForEdit = yup.object().shape({
  name: yup.string(),
  remarks: yup.string(),
  contents: yup.string(),
  price: yup.number().typeError("숫자만 입력가능합니다."),
  // tags: yup.string().required("필수 입력 사항입니다."),
});
