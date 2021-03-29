/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type WorkListItem_article = {
    readonly id: string;
    readonly subject: string;
    readonly description: string | null;
    readonly link: string | null;
    readonly linkLabel: string | null;
    readonly pcImage: string | null;
    readonly " $refType": "WorkListItem_article";
};
export type WorkListItem_article$data = WorkListItem_article;
export type WorkListItem_article$key = {
    readonly " $data"?: WorkListItem_article$data;
    readonly " $fragmentRefs": FragmentRefs<"WorkListItem_article">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkListItem_article",
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
    }
  ],
  "type": "Article",
  "abstractKey": null
};
(node as any).hash = '6d3cae2e41af55c6e749d858ea4a69e7';
export default node;
