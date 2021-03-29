// src/pages/index.tsx
import React from "react";
import { NextPage } from "next";
import { initEnvironment } from "src/lib/relay";
import IndexPage_indexQuery from "src/queries/IndexPage";
import { fetchQuery } from "react-relay";
import WorkList from "src/components/organisms/WorkList";

const IndexPage: NextPage = (props) => {
  return (
    <div>
      <header>
        <h1>COQZOテンプレート</h1>
      </header>
      <WorkList query={props} />
    </div>
  );
};

export async function getStaticProps() {
  const environment = initEnvironment({});
  let queryProps = null;

  try {
    queryProps = await fetchQuery(environment, IndexPage_indexQuery, {
      count: 25,
      skip: 0,
      orderBy: "position_ASC",
      workFilter: {
        contentNameEquals: "work",
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(queryProps);
  if (!queryProps) {
    return {
      notFound: true,
    };
  }

  const initialRecords = environment.getStore().getSource().toJSON();
  return {
    props: {
      ...JSON.parse(JSON.stringify(queryProps)),
      initialRecords,
    },
    revalidate: 5,
  };
}

export default IndexPage;
