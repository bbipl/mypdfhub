import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertPDFToPowerPoint = () => {
  const location = useLocation();
  const selectedFiles = location.state?.files || [];

  const handleConvert = () => {
    alert("Converting PDF files to PowerPoint...");
    // Logic to convert PDF to PowerPoint goes here
  };

  const handleDownload = () => {
    alert("Downloading PowerPoint files...");
    // Logic to download the converted PowerPoint files goes here
  };

  return (
    <div className="convert-pdf-to-powerpoint-container">
      <h1>Convert PDF to PowerPoint</h1>
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
          Convert to PowerPoint
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download PowerPoint
        </button>
      </div>
    </div>
  );
};

export default ConvertPDFToPowerPoint;
