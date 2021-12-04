import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken) setMyAccessToken(accessToken);
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
      {" "}
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          {" "}
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
