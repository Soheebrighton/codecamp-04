import { useQuery, gql } from "@apollo/client";

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
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <>
      <div>logged in! </div>
      <div>welcome to the page</div>
      <div>hello, {data?.fetchUserLoggedIn.name}</div>
    </>
  );
}
