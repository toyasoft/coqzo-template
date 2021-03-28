/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type IndexPage_indexQueryVariables = {};
export type IndexPage_indexQueryResponse = {
    readonly publicWebsite: {
        readonly id: string;
    };
};
export type IndexPage_indexQuery = {
    readonly response: IndexPage_indexQueryResponse;
    readonly variables: IndexPage_indexQueryVariables;
};



/*
query IndexPage_indexQuery {
  publicWebsite {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Website",
    "kind": "LinkedField",
    "name": "publicWebsite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "IndexPage_indexQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "IndexPage_indexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8b1b3e649d8f0475654a492d4f75a8f7",
    "id": null,
    "metadata": {},
    "name": "IndexPage_indexQuery",
    "operationKind": "query",
    "text": "query IndexPage_indexQuery {\n  publicWebsite {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '27cb16dbafdc472d4dadeaa934877efc';
export default node;
