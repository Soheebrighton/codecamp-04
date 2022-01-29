import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   // alert("로그인한 사람만 입장가능합니다. 로그인을 먼저 해주세요");
    //   router.push("/auth/login");
    // }

    if (!localStorage.getItem("refreshToken")) {
      alert("로그인한 사람만 입장가능합니다. 로그인을 먼저 해주세요");
      router.push("/auth/login");
    }
  }, []);

  return <Component {...props} />;
};
