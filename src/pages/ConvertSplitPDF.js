import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertSplitPDF = () => {
  const location = useLocation();
  const file = location.state?.file || null;
  const [splitRange, setSplitRange] = useState("");

  const handleSplit = () => {
    if (!splitRange) {
      alert("Please specify a range or splitting criteria.");
      return;
    }
    alert(`Splitting the file "${file.name}" into: ${splitRange}`);
    // Logic to split the PDF file goes here
  };

  const handleDownload = () => {
    alert("Downloading split PDF files...");
    // Logic to download the split files goes here
  };

  return (
    <div className="convert-split-pdf-container">
      <h1>Split PDF Options</h1>
      {file ? (
        <>
          <p>File to split: {file.name}</p>
          <div className="split-options">
            <label htmlFor="split-range">
              Enter page ranges (e.g., "1-3,5,7-10"):
            </label>
            <input
              type="text"
              id="split-range"
              value={splitRange}
              onChange={(e) => setSplitRange(e.target.value)}
              placeholder="1-3,5,7-10"
            />
          </div>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleSplit}>
              Split PDF
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download Split PDFs
            </button>
          </div>
        </>
      ) : (
        <p>No file uploaded.</p>
      )}
    </div>
  );
};

export default ConvertSplitPDF;
