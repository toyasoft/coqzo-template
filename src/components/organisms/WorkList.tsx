import { createFragmentContainer, graphql } from "react-relay";
import { WorkList_query } from "src/__generated__/WorkList_query.graphql";
import WorkListItem from "./WorkListItem";

type Props = {
  query: WorkList_query;
};

const WorkList: React.FC<Props> = (props) => {
  return (
    <>
      <section>
        <div>
          <h3>テストデータ</h3>

          {props.query.works && props.query.works.edges.length > 0 ? (
            <ul>
              {props.query.works.edges.map(({ node }) => {
                if (node) {
                  return <WorkListItem article={node} key={node.id} />;
                }
              })}
            </ul>
          ) : (
            <div>データが見つかりません</div>
          )}
        </div>
      </section>
      <style jsx>{``}</style>
    </>
  );
};

export default createFragmentContainer(WorkList, {
  query: graphql`
    fragment WorkList_query on Query
    @argumentDefinitions(
      count: { type: "Int!", defaultValue: 25 }
      skip: { type: "Int", defaultValue: 0 }
      filter: { type: "ArticleFilter" }
      orderBy: { type: "String" }
    ) {
      works: articles(
        first: $count
        skip: $skip
        filter: $filter
        orderBy: $orderBy
      ) @connection(key: "WorkList_works") {
        edges {
          node {
            id
            ...WorkListItem_article
          }
        }
      }
    }
  `,
});
