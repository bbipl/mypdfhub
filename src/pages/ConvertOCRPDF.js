import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertOCRPDF = () => {
  const location = useLocation();
  const files = location.state?.files || [];
  const [language, setLanguage] = useState("English");

  const handleOCR = () => {
    alert(`Applying OCR to the uploaded PDF files with ${language} language support...`);
    // Logic to apply OCR to PDF files goes here
  };

  const handleDownload = () => {
    alert("Downloading OCR-applied PDF files...");
    // Logic to download the processed PDF files goes here
  };

  return (
    <div className="convert-ocr-pdf-container">
      <h1>OCR PDF Options</h1>
      {files.length > 0 ? (
        <>
          <p>Uploaded files:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <div className="ocr-options">
            <label htmlFor="language-select">Select OCR Language:</label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleOCR}>
              Apply OCR
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download OCR-Processed PDF
            </button>
          </div>
        </>
      ) : (
        <p>No files uploaded.</p>
      )}
    </div>
  );
};

export default ConvertOCRPDF;
