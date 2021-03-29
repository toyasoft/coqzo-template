/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArticleFilter = {
    OR?: Array<ArticleFilter> | null;
    subjectContains?: string | null;
    contentNameEquals?: string | null;
};
export type IndexPage_indexQueryVariables = {
    count: number;
    skip?: number | null;
    orderBy?: string | null;
    workFilter?: ArticleFilter | null;
};
export type IndexPage_indexQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"WorkList_query">;
};
export type IndexPage_indexQuery = {
    readonly response: IndexPage_indexQueryResponse;
    readonly variables: IndexPage_indexQueryVariables;
};



/*
query IndexPage_indexQuery(
  $count: Int!
  $skip: Int
  $orderBy: String
  $workFilter: ArticleFilter
) {
  ...WorkList_query_1K0MtL
}

fragment WorkListItem_article on Article {
  id
  subject
  description
  link
  linkLabel
  pcImage
}

fragment WorkList_query_1K0MtL on Query {
  works: articles(first: $count, skip: $skip, filter: $workFilter, orderBy: $orderBy) {
    edges {
      node {
        id
        ...WorkListItem_article
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "orderBy"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "skip"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "workFilter"
},
v4 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "workFilter"
},
v5 = {
  "kind": "Variable",
  "name": "orderBy",
  "variableName": "orderBy"
},
v6 = {
  "kind": "Variable",
  "name": "skip",
  "variableName": "skip"
},
v7 = [
  (v4/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v5/*: any*/),
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IndexPage_indexQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "WorkList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "IndexPage_indexQuery",
    "selections": [
      {
        "alias": "works",
        "args": (v7/*: any*/),
        "concreteType": "ArticleConnection",
        "kind": "LinkedField",
        "name": "articles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ArticleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Article",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "subject",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "link",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "linkLabel",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "pcImage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "works",
        "args": (v7/*: any*/),
        "filters": [
          "skip",
          "filter",
          "orderBy"
        ],
        "handle": "connection",
        "key": "WorkList_works",
        "kind": "LinkedHandle",
        "name": "articles"
      }
    ]
  },
  "params": {
    "cacheID": "6c0143e237d510c84a4934ca09d992c4",
    "id": null,
    "metadata": {},
    "name": "IndexPage_indexQuery",
    "operationKind": "query",
    "text": "query IndexPage_indexQuery(\n  $count: Int!\n  $skip: Int\n  $orderBy: String\n  $workFilter: ArticleFilter\n) {\n  ...WorkList_query_1K0MtL\n}\n\nfragment WorkListItem_article on Article {\n  id\n  subject\n  description\n  link\n  linkLabel\n  pcImage\n}\n\nfragment WorkList_query_1K0MtL on Query {\n  works: articles(first: $count, skip: $skip, filter: $workFilter, orderBy: $orderBy) {\n    edges {\n      node {\n        id\n        ...WorkListItem_article\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dda2be66b112f7959e3f1c469a93f337';
export default node;
