import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const RepairPDF = () => {
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    navigate("/repair-pdf-options", { state: { files: files } });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    navigate("/repair-pdf-options", { state: { files: files } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="repair-pdf-container">
      <h1>Repair PDF Tool</h1>
      <p>Upload your corrupted or damaged PDF files to attempt repairs.</p>

      {/* Drag-and-Drop Area */}
      <div
        className="dropbox"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop your PDF files here</p>
        <p>or</p>
        <label className="file-upload-button">
          Select Files
          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>
    </div>
  );
};

export default RepairPDF;
