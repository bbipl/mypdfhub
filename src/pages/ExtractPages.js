import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const ExtractPages = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const MAX_FILE_SIZE_MB = 10;

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 1) {
      setError("Please upload only one file for extraction.");
      return;
    }

    const file = files[0];
    const validFileTypes = ["application/pdf", "application/zip", "application/x-rar-compressed", "application/x-tar"];

    if (!validFileTypes.includes(file.type) && !file.name.match(/\.(zip|rar|tar|pdf)$/)) {
      setError("Invalid file type. Please upload a PDF, ZIP, RAR, or TAR file.");
      return;
    }

    if (file.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
      setError(`File size exceeds ${MAX_FILE_SIZE_MB}MB. Please upload a smaller file.`);
      return;
    }

    setError(""); // Clear any previous errors
    setSelectedFile(file);
    setMessage(`File "${file.name}" ready for processing.`);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    if (files.length > 1) {
      setError("Please upload only one file for extraction.");
      return;
    }

    const file = files[0];
    handleFileChange({ target: { files: [file] } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDownload = () => {
    if (!selectedFile) {
      setError("No file selected to download.");
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = selectedFile.name;
    a.click();
    URL.revokeObjectURL(url);
    setMessage(`File "${selectedFile.name}" downloaded successfully.`);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setError("");
    setMessage("");
  };

  const handleExtract = () => {
    if (!selectedFile) {
      setError("No file selected to extract.");
      return;
    }

    navigate("/extract-pages-options", { state: { file: selectedFile } });
  };

  return (
    <div className="extract-pages-container">
      <h1>Extract Pages or Files</h1>
      <p>Upload your PDF, ZIP, RAR, or TAR file to extract content.</p>

      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}

      {/* Drag-and-Drop Area */}
      <div
        className={`dropbox ${error ? "dropbox-error" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop your file here</p>
        <p>or</p>
        <label className="file-upload-button">
          Select File
          <input
            type="file"
            accept=".pdf,.zip,.rar,.tar"
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>

      {/* Selected File Info */}
      {selectedFile && (
        <div className="file-info">
          <p>
            <strong>Selected File:</strong> {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
          </p>
          <button className="clear-file-button" onClick={handleClearFile}>
            Clear File
          </button>
          <button className="download-button" onClick={handleDownload}>
            Download File
          </button>
          <button className="extract-button" onClick={handleExtract}>
            Extract Content
          </button>
        </div>
      )}
    </div>
  );
};

export default ExtractPages;
