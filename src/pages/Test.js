import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "OSDQCQO861",
  "bb3c62988d321534e9c478b02b213bb7"
);

export default function Test() {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName="uploads"
      >
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  );
}

const Hit = ({hit}) => {
  return <p>{hit.fileTitle}</p>
}