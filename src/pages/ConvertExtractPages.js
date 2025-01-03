import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertExtractPages = () => {
  const location = useLocation();
  const file = location.state?.file || null;
  const [pagesToExtract, setPagesToExtract] = useState("");

  const handleExtractPages = () => {
    if (!pagesToExtract) {
      alert("Please specify the pages to extract.");
      return;
    }
    alert(`Extracting pages: ${pagesToExtract} from file "${file.name}"`);
    // Logic to extract pages from the PDF goes here
  };

  const handleDownload = () => {
    alert("Downloading the extracted pages...");
    // Logic to download the extracted pages goes here
  };

  return (
    <div className="convert-extract-pages-container">
      <h1>Extract Pages Options</h1>
      {file ? (
        <>
          <p>File to modify: {file.name}</p>
          <div className="extract-options">
            <label htmlFor="pages-to-extract">
              Enter pages to extract (e.g., "1,2,4-6"):
            </label>
            <input
              type="text"
              id="pages-to-extract"
              value={pagesToExtract}
              onChange={(e) => setPagesToExtract(e.target.value)}
              placeholder="1,2,4-6"
            />
          </div>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleExtractPages}>
              Extract Pages
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download Extracted Pages
            </button>
          </div>
        </>
      ) : (
        <p>No file uploaded.</p>
      )}
    </div>
  );
};

export default ConvertExtractPages;
