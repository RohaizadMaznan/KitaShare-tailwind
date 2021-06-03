import React from "react";
import Meta from "../components/layout/meta/Meta";
// import fire from "../auth/fbAuth";
import SearchResult from "../components/search/SearchResult";
// import queryString from "query-string";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  connectPagination,
  connectSearchBox,
} from "react-instantsearch-dom";
// import CustomSearchBox from '../components/search/SearchBox'

const searchClient = algoliasearch(
  "OSDQCQO861",
  "bb3c62988d321534e9c478b02b213bb7"
);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <input
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      placeholder="Search handnote document..."
      className="w-full border-b py-2 px-4 text-lg lg:text-2xl font-medium bg-transparent text-gray-600"
    />
    {/* <button onClick={() => refine('')}>Reset query</button> */}
    {/* {isSearchStalled ? 'My search is stalled' : ''} */}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => (
  <ul className="text-center mt-10">
    {new Array(nbPages).fill(null).map((_, index) => {
      const page = index + 1;
      const style = {
        fontWeight: currentRefinement === page ? "bold" : "",
      };

      return (
        <li key={index}>
          <a
            href={createURL(page)}
            style={style}
            onClick={(event) => {
              event.preventDefault();
              refine(page);
            }}
          >
            {page}
          </a>
        </li>
      );
    })}
  </ul>
);

const CustomPagination = connectPagination(Pagination);

export default function Search() {
  // const [results, setResults] = useState("");

  // useEffect(() => {
  //   // console.log(window.location.search)
  //   const parsed = queryString.parse(window.location.search);
  //   console.log(parsed);
  //   setResult(parsed);
  // }, []);

  let query = useQuery();
  const searchDoc = query.get("doc");
  console.log(`This is ${searchDoc}`);

  // useEffect(() => {
  //   // console.log(`Test ${query.get("doc")}`)

  //   const searchDoc = query.get("doc");
  //   console.log(`This is ${searchDoc}`);

  //   const fetchData = async () => {
  //     const db = fire.firestore();
  //     const data = await db
  //       .collection("uploads")
  //       .orderBy("createdAt", "desc")
  //       .where("fileTitle", "==", searchDoc)
  //       // .startAt(searchDoc)
  //       // .endAt(searchDoc)
  //       .get();
  //     setResults(
  //       data.docs.map((doc) => {
  //         return { ...doc.data(), id: doc.id };
  //       })
  //     );
  //     // setLoading(true);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Meta
        title={`Search - ${query.get(
          "doc"
        )} | KitaShare Web Application and OCR`}
      />
      <div
        className="w-full p-5 mt-6 lg:mt-0 text-gray-900 leading-normal border-rounded"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {/* <p>
          This is search result:{" "}
          <span className="font-bold">{query.get("doc")}</span>
        </p>
        <hr className="my-5" /> */}

        <InstantSearch searchClient={searchClient} indexName="uploads">
          {/* <SearchBox defaultRefinement={searchDoc} /> */}
          <CustomSearchBox defaultRefinement={searchDoc} />
          <hr className="my-5" />
          <Hits hitComponent={Hit} />
          <CustomPagination defaultRefinement={1} padding={5} totalPages={5} />
          {/* <Pagination padding={5} totalPages={5} /> */}
        </InstantSearch>

        {/* {!results
          ? ""
          : results.map((e) => (
              <>
                <SearchResult
                  fileName={e.fileTitle}
                  course="Software Engineering"
                  code="SCSJ 2203"
                  date="April 2021"
                  university="Universiti Teknologi Malaysia"
                />
              </>
            ))} */}
      </div>
    </>
  );
}

const Hit = ({ hit }) => {
  return (
    <>
      { hit.onHide === false || hit.onHide === "false" ? (
        <>
          <SearchResult
            fileName={hit.fileTitle}
            course={hit.courseName}
            code={hit.courseCode}
            date={moment(hit.createdAt).fromNow()}
            university={hit.universityName}
            id={hit.objectID}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};
