import React from "react";
import Meta from "../components/layout/meta/Meta";
import SearchResult from "../components/search/SearchResult";

export default function Search() {
  return (
    <>
    <Meta title="Search | KitaShare Web Application and OCR" />
      <SearchResult
        fileName="Software Engineering Fundamentals Final Exam Handnotes"
        course="Software Engineering"
        code="SCSJ 2203"
        date="April 2021"
        university="Universiti Teknologi Malaysia"
      />
    </>
  );
}
