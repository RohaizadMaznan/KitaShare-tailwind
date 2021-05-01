import React from "react";
import { Helmet } from "react-helmet";

export default function Meta({ title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="KitaShare a open-source student repositories to upload and download handnotes by using optical recognition characters. Open-source, OCR, chatbot, by Rohaizad Maznan"
        ></meta>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
}
