import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertRepairPDF = () => {
  const location = useLocation();
  const files = location.state?.files || [];

  const handleRepair = () => {
    alert("Attempting to repair the uploaded PDF files...");
    // Logic to repair PDF files goes here
  };

  const handleDownload = () => {
    alert("Downloading repaired PDF files...");
    // Logic to download repaired PDF files goes here
  };

  return (
    <div className="convert-repair-pdf-container">
      <h1>Repair PDF Options</h1>
      {files.length > 0 ? (
        <>
          <p>Uploaded files:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleRepair}>
              Repair PDF
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download Repaired PDF
            </button>
          </div>
        </>
      ) : (
        <p>No files uploaded.</p>
      )}
    </div>
  );
};

export default ConvertRepairPDF;
