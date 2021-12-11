import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   // alert("로그인한 사람만 입장가능합니다. 로그인을 먼저 해주세요");
    //   router.push("/auth/login");
    // }

    if (!setAccessToken) {
      // alert("로그인한 사람만 입장가능합니다. 로그인을 먼저 해주세요");
      router.push("/auth/login");
    }
  }, []);

  return <Component {...props} />;
};
