// import "public/styles.css";
import fetchGraphQL from '../lib/fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from '../lib/RelayEnvironment';
// import React from 'react'
// const { Suspense } = React;



export default function App({ Component, pageProps }) {
  // const environment = useEnvironment(pageProps.initialRecords);
  // return (
  //   <ReactRelayContext.Provider value={{ environment, variables: {} }}>
  //     <Component {...pageProps} />
  //   </ReactRelayContext.Provider>
  // );
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {/* <Suspense fallback={'Loading...'}> */}
        <Component {...pageProps} />
        {/* <App preloadedQuery={preloadedQuery} /> */}
      {/* </Suspense> */}
      
    </RelayEnvironmentProvider>
  )
}
