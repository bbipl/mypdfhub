import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertPDFToWord = () => {
  const location = useLocation();
  const selectedFiles = location.state?.files || [];

  const handleConvert = () => {
    alert("Converting PDF files to Word documents...");
    // Logic to convert PDF to Word goes here
  };

  const handleDownload = () => {
    alert("Downloading Word files...");
    // Logic to download the converted Word files goes here
  };

  return (
    <div className="convert-pdf-to-word-container">
      <h1>Convert PDF to Word</h1>
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
          Convert to Word
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download Word
        </button>
      </div>
    </div>
  );
};

export default ConvertPDFToWord;
