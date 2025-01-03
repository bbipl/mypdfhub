import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertPDFToExcel = () => {
  const location = useLocation();
  const selectedFiles = location.state?.files || [];

  const handleConvert = () => {
    alert("Converting PDF files to Excel...");
    // Logic to convert PDF to Excel goes here
  };

  const handleDownload = () => {
    alert("Downloading Excel files...");
    // Logic to download the converted Excel files goes here
  };

  return (
    <div className="convert-pdf-to-excel-container">
      <h1>Convert PDF to Excel</h1>
      <p>Files ready for conversion:</p>
      {selectedFiles.length > 0 ? (
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      ) : (
        <p>No files selected.</p>
      )}
      <div className="action-buttons">
        <button className="convert-button" onClick={handleConvert}>
          Convert to Excel
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download Excel
        </button>
      </div>
    </div>
  );
};

export default ConvertPDFToExcel;
