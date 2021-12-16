import "../styles/globals.css";
import * as Sentry from "@sentry/nextjs";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
// import { Head } from "next/head";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB206h-6cJGhtDv7OJW1MzazsKEKmkxfvA",
  authDomain: "codecamp04-sohee.firebaseapp.com",
  projectId: "codecamp04-sohee",
  storageBucket: "codecamp04-sohee.appspot.com",
  messagingSenderId: "1082186837330",
  appId: "1:1082186837330:web:2591bad989a4358cf21e8b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

Sentry.init({
  dsn: "https://94cc5f6ca564488184e2f06253f6734b@o1091865.ingest.sentry.io/6109513",
});
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [myAccessToken, SetMyAccessToken] = useState("");
  const [myUserInfo, SetMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: SetMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: SetMyUserInfo,
  };

  // next에서 서버 구분 로직
  // if (typeof window !== "undefined") {
  // }
  // if (process.browser) {
  // }

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(SetMyAccessToken);

    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) SetMyAccessToken(accessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. to catch the invalid token
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            header: {
              ...operation.getContext().header,
              authorization: `Bearer ${getAccessToken(SetMyAccessToken)}`,
              // 2. to get a new accessToken with the refreshToken
              // const newAccessToken = getAccessToken(SetMyAccessToken);
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
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba75a77772202896933d3e15db534d1"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
