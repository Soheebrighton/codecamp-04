import { gql, useQuery } from "@apollo/client";
// import { iQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } =
    // useQuery<Pick<iQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    useQuery(FETCH_USER_LOGGED_IN);
  return (
    <>
      {" "}
      <div>로그인에 성공하였습니다</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
    </>
  );
}
