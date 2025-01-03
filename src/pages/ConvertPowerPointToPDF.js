import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertPowerPointToPDF = () => {
  const location = useLocation();
  const selectedFiles = location.state?.files || [];

  const handleConvert = () => {
    alert("Converting PowerPoint files to PDF...");
    // Logic to convert PowerPoint to PDF goes here
  };

  const handleDownload = () => {
    alert("Downloading PDF...");
    // Logic to download the converted PDF goes here
  };

  return (
    <div className="convert-powerpoint-to-pdf-container">
      <h1>Convert PowerPoint to PDF</h1>
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
          Convert to PDF
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ConvertPowerPointToPDF;
