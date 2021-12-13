import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function MyPdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    let style = {
        padding: "0",
        margin: "0"
    }

    return (
        <div style={style}>
        <Document
            file="ThiLe_Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        </div>
    );
}
export default MyPdf;