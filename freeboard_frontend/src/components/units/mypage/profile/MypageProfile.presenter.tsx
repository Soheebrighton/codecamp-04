import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import * as A from "./MypageProfile.styles";

interface IPropsProfileUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeResetPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdateUser: () => Promise<void>;
  onClickResetPassword: () => Promise<void>;
}

export default function ProfileUI(props: IPropsProfileUI) {
  return (
    <A.Background>
      <A.Wrapper>
        <A.Title>회원정보 수정</A.Title>
        <A.Unchangable>💡 이메일은 변경할 수 없습니다.</A.Unchangable>
        <A.InputWrapper>
          <A.Label>이메일</A.Label>
          <A.Input
            defaultValue={props.data?.fetchUserLoggedIn.email}
            disabled
          />
        </A.InputWrapper>
        <A.InputWrapper>
          <A.Label>사용자 이름</A.Label>
          <A.Input
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchUserLoggedIn.name}
          />
        </A.InputWrapper>
        <A.SubmitBtn onClick={props.onClickUpdateUser}>
          변정사항 저장
        </A.SubmitBtn>
        <A.Title>비밀번호 수정</A.Title>
        <A.InputWrapper>
          <A.Label>비밀번호</A.Label>
          <A.Input onChange={props.onChangeResetPassword} type="password" />
        </A.InputWrapper>
        <A.InputWrapper>
          <A.Label>비밀번호 확인</A.Label>
          <A.Input onChange={props.onChangeCheckPassword} type="password" />
        </A.InputWrapper>
        <A.SubmitBtn onClick={props.onClickResetPassword}>
          비밀번호 변경
        </A.SubmitBtn>
      </A.Wrapper>
    </A.Background>
  );
}
