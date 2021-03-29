import { graphql } from 'react-relay'

export default graphql`
  query IndexPage_indexQuery($count: Int!, $skip: Int, $orderBy: String, $workFilter: ArticleFilter) {
    ...WorkList_query @arguments(count: $count, skip: $skip, orderBy: $orderBy, filter: $workFilter)
  }
`