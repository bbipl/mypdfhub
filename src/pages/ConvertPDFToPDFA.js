import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertPDFToPDFA = () => {
  const location = useLocation();
  const selectedFiles = location.state?.files || [];

  const handleConvert = () => {
    alert("Converting PDF files to PDF/A...");
    // Logic to convert PDF to PDF/A goes here
  };

  const handleDownload = () => {
    alert("Downloading PDF/A files...");
    // Logic to download the converted PDF/A files goes here
  };

  return (
    <div className="convert-pdf-to-pdfa-container">
      <h1>Convert PDF to PDF/A</h1>
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
          Convert to PDF/A
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download PDF/A
        </button>
      </div>
    </div>
  );
};

export default ConvertPDFToPDFA;
