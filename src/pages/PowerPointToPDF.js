import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const PowerPointToPDF = () => {
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    navigate("/convert-powerpoint-to-pdf", { state: { files: files } });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    navigate("/convert-powerpoint-to-pdf", { state: { files: files } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="powerpoint-to-pdf-container">
      <h1>PowerPoint to PDF Tool</h1>
      <p>Convert your PowerPoint presentations to PDF easily with this tool.</p>

      {/* Drag-and-Drop Area */}
      <div
        className="dropbox"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop your PowerPoint files here</p>
        <p>or</p>
        <label className="file-upload-button">
          Select Files
          <input
            type="file"
            accept=".ppt, .pptx"
            multiple
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>
    </div>
  );
};

export default PowerPointToPDF;
