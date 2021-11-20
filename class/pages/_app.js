//

// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
// import Layout from "../src/components/commons/layout/";
import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      {/* <Global styles={globalStyles} /> */}

      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
