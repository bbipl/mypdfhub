import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import "../styles/pages.css";

const SplitPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [splitPdfBlobs, setSplitPdfBlobs] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }

    setError(""); // Clear previous errors
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }

    setError(""); // Clear previous errors
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSplit = async () => {
    if (!selectedFile) {
      setError("Please select a PDF file to split.");
      return;
    }

    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const splitBlobs = [];

      for (let i = 0; i < pdfDoc.getPageCount(); i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);
        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        splitBlobs.push(blob);
      }

      setSplitPdfBlobs(splitBlobs);
      setError(""); // Clear previous errors
    } catch (error) {
      setError("An error occurred while splitting the PDF. Please try again.");
      console.error("Split error:", error);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setSplitPdfBlobs([]);
    setError("");
  };

  const handleDownload = (blob, index) => {
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `split-page-${index + 1}.pdf`;
    link.click();
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
    <div className="split-pdf-container">
      <h1>Split PDF Tool</h1>
      <p>Upload your PDF file to split it into multiple pages.</p>

      {/* Display Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Drag-and-Drop Area */}
      <div
        className="dropbox"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop your PDF file here</p>
        <p>or</p>
        <label className="file-upload-button">
          Select File
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>

      {/* Display Selected File */}
      {selectedFile && (
        <div className="file-details">
          <h3>Selected File:</h3>
          <p>{selectedFile.name}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="action-buttons">
        {selectedFile && (
          <>
            <button onClick={handleSplit} className="split-button">
              Split PDF
            </button>
            <button onClick={handleClearFile} className="clear-button">
              Clear File
            </button>
          </>
        )}
      </div>

      {/* Display Split Pages */}
      {splitPdfBlobs.length > 0 && (
        <div className="split-results">
          <h3>Split Pages:</h3>
          <ul>
            {splitPdfBlobs.map((blob, index) => (
              <li key={index}>
                Page {index + 1}: 
                <button
                  onClick={() => handleDownload(blob, index)}
                  className="download-button"
                >
                  Download
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SplitPDF;
