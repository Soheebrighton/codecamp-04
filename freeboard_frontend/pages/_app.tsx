import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import { onError } from "@apollo/client/link/error";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// import { useEffect } from "react";
// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO6seXLSvVJzQ43Z0a8hjnvBoz__Nkm1s",
  authDomain: "codecamp04-freeboard.firebaseapp.com",
  projectId: "codecamp04-freeboard",
  storageBucket: "codecamp04-freeboard.appspot.com",
  messagingSenderId: "745188247337",
  appId: "1:745188247337:web:5c09f69a0bc0f14dac9938",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  const router = useRouter();
  // const history = [];
  // if (typeof window !== "undefined") {
  //   // localStorage.setItem(history.push(router.asPath));
  //   // localStorage.setItem("history", history);
  // }

  useEffect(() => storePathValues, [router.asPath]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;

    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    if (
      globalThis.location.pathname === "/auth/login" ||
      globalThis.location.pathname === "/auth/register"
    ) {
      return;
    } else {
      storage.setItem("prevPath", prevPath);
      // Set the current path value by looking at the browser's location object.
      storage.setItem("currentPath", globalThis.location.pathname);
    }
  }

  // console.log(history);

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setMyAccessToken(accessToken);

    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            header: {
              ...operation.getContext().header,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${myAccessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
