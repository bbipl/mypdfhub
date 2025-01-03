import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertPDFToJPG = () => {
  const location = useLocation();
  const selectedFiles = location.state?.files || [];

  const handleConvert = () => {
    alert("Converting PDF files to JPG...");
    // Logic to convert PDF to JPG goes here
  };

  const handleDownload = () => {
    alert("Downloading JPG files...");
    // Logic to download the converted JPG files goes here
  };

  return (
    <div className="convert-pdf-to-jpg-container">
      <h1>Convert PDF to JPG</h1>
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
          Convert to JPG
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download JPG
        </button>
      </div>
    </div>
  );
};

export default ConvertPDFToJPG;
