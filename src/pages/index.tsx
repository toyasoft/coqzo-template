// src/pages/index.tsx
import React from "react";
import { NextPage } from "next";
import { fetchQuery } from "react-relay";
import fetchGraphQL from '../lib/fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useQueryLoader
} from 'react-relay/hooks';
import IndexPage_indexQuery from "../queries/IndexPage";
import RelayEnvironment from '../lib/RelayEnvironment';

// const preloadedQuery = loadQuery(RelayEnvironment, IndexPage_indexQuery, {
//   /* query variables */
// });

// console.log(preloadedQuery)

const IndexPage: NextPage = (props) => {
  // console.log(props)
  const data = usePreloadedQuery(IndexPage_indexQuery, props)
  console.log(data.publicWebsite.id)
  return (
    <>
      <div>
        {data?.publicWebsite?.id}
        </div>
      <style jsx>{`

      `}</style>
    </>
  );
};

export async function getStaticProps() {
  // const environment = initEnvironment({});
  // let queryProps = null;

  // try {
  //   queryProps = await fetchQuery(environment, IndexPage_indexQuery, {
  //     count: 25,
  //     skip: 0,
  //     orderBy: "position_ASC",
  //     workFilter: {
  //       contentNameEquals: "work",
  //     },
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  // if (!queryProps) {
  //   return {
  //     notFound: true,
  //   };
  // }
  const preloadedQuery = loadQuery(RelayEnvironment, IndexPage_indexQuery, {
    /* query variables */
  });
  
  console.log(preloadedQuery)

  // const initialRecords = environment.getStore().getSource().toJSON();
  return {
    props: {
      ...JSON.parse(JSON.stringify(preloadedQuery))
      // ...JSON.parse(JSON.stringify(queryProps)),
      // initialRecords,
    },
    revalidate: 5,
  };
}

export default IndexPage;

