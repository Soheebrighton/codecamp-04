import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

function LoginSuccessPage(props) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 다른페이지에 코드 복붙은 좋은 방법이 아니다.

  return (
    <>
      <div>로그인에 성공하였습니다!!!</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>
    </>
  );
}

export default withAuth(LoginSuccessPage);
