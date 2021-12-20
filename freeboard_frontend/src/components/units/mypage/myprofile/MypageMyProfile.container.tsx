import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function MyProfile() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [password, setPassword] = useState("");

  function onChangeResetPassword(event) {
    setPassword(event.target.value);
  }

  async function onClickResetPassword() {
    try {
      await resetUserPassword({
        variables: {
          password: password,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <input type="text" onChange={onChangeResetPassword} />
      <button onClick={onClickResetPassword}>비밀번호 바꾸기</button>
    </>
  );
}
