import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertCompressPDF = () => {
  const location = useLocation();
  const files = location.state?.files || [];
  const [compressionLevel, setCompressionLevel] = useState("medium");

  const handleCompress = () => {
    alert(`Compressing files with ${compressionLevel} compression...`);
    // Logic to compress PDF files goes here
  };

  const handleDownload = () => {
    alert("Downloading compressed PDF files...");
    // Logic to download the compressed PDF files goes here
  };

  return (
    <div className="convert-compress-pdf-container">
      <h1>Compress PDF Options</h1>
      {files.length > 0 ? (
        <>
          <p>Uploaded files:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <div className="compression-options">
            <label htmlFor="compression-level">Select Compression Level:</label>
            <select
              id="compression-level"
              value={compressionLevel}
              onChange={(e) => setCompressionLevel(e.target.value)}
            >
              <option value="low">Low (High Quality)</option>
              <option value="medium">Medium (Balanced)</option>
              <option value="high">High (Smaller Size)</option>
            </select>
          </div>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleCompress}>
              Compress PDF
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download Compressed PDF
            </button>
          </div>
        </>
      ) : (
        <p>No files uploaded.</p>
      )}
    </div>
  );
};

export default ConvertCompressPDF;
