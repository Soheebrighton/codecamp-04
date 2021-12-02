import * as yup from "yup";

export const schema = yup.object().shape({
  myEmail: yup.string().email("invalid email").required("required"),
  myPassword: yup
    .string()
    .min(4, "min 4")
    .max(15, "max 15")
    .required("required"),
});
