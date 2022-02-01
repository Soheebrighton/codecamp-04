import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IMutation,
  IMutationResetUserPasswordArgs,
  IMutationUpdateUserArgs,
} from "../../../../commons/types/generated/types";
import ProfileUI from "./MypageProfile.presenter";
import {
  RESET_USER_PASSWORD,
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
} from "./MypageProfile.queries";

export default function Profile() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeResetPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);
  };

  const onClickUpdateUser = async () => {
    if (name) {
      try {
        await updateUser({
          variables: {
            updateUserInput: {
              name,
            },
          },
        });
        alert("변경사항이 저장되었습니다!");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("올바른 사용자 이름을 입력해주세요.");
    }
  };

  const onClickResetPassword = async () => {
    if (password && checkPassword && password === checkPassword) {
      try {
        await resetUserPassword({
          variables: {
            password: password,
          },
        });
        alert("비밀번호가 정상적으로 변경되었습니다!");
      } catch (error) {
        alert(error.message);
      }
    } else if (password !== checkPassword) {
      alert("비밀번호를 확인해주세요.");
    } else if (!password && !checkPassword) {
      alert("변경할 비밀번호를 입력해주세요.");
    }
  };

  return (
    <>
      <ProfileUI
        data={data}
        onChangeName={onChangeName}
        onClickUpdateUser={onClickUpdateUser}
        onChangeCheckPassword={onChangeCheckPassword}
        onChangeResetPassword={onChangeResetPassword}
        onClickResetPassword={onClickResetPassword}
      />
    </>
  );
}
