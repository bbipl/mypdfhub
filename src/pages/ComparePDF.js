import React, { useState } from "react";
import "../styles/pages.css"; // Component-specific styles

const ComparePDF = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + selectedFiles.length > 2) {
      alert("You can only upload two PDF files to compare.");
      return;
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    if (files.length + selectedFiles.length > 2) {
      alert("You can only upload two PDF files to compare.");
      return;
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="compare-pdf-container">
      <h1>Compare PDF Tool</h1>
      <p>Upload two PDF files to compare their content side by side.</p>

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

      {/* Display Selected Files */}
      {selectedFiles.length > 0 && (
        <div className="file-list">
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name}{" "}
                <button onClick={() => removeFile(index)} className="remove-file-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show Compare Button */}
      {selectedFiles.length === 2 && (
        <div className="compare-action">
          <button className="compare-button">Compare PDFs</button>
        </div>
      )}
    </div>
  );
};

export default ComparePDF;
