import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

export const GlobalContext = createContext(null);

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
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken) SetMyAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${myAccessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
