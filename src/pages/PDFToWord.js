import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const PDFToWord = () => {
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    navigate("/convert-pdf-to-word", { state: { files: files } });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    navigate("/convert-pdf-to-word", { state: { files: files } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pdf-to-word-container">
      <h1>PDF to Word Tool</h1>
      <p>Convert your PDF files to Word documents easily with this tool.</p>

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

export default PDFToWord;
