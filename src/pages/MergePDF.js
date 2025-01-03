import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import "../styles/pages.css";

const MergePDF = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const [mergedPdfBlob, setMergedPdfBlob] = useState(null);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    const allFiles = [...selectedFiles, ...newFiles];

    if (allFiles.length > 5) {
      setError("You can upload up to 5 PDF files only.");
      return;
    }

    setError(""); // Clear previous errors
    setSelectedFiles(allFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    const allFiles = [...selectedFiles, ...newFiles];

    if (allFiles.length > 5) {
      setError("You can upload up to 5 PDF files only.");
      return;
    }

    setError(""); // Clear previous errors
    setSelectedFiles(allFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleMerge = async () => {
    if (selectedFiles.length < 2) {
      setError("Please select at least two files to merge.");
      return;
    }

    try {
      const pdfDoc = await PDFDocument.create();

      for (const file of selectedFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const donorPdfDoc = await PDFDocument.load(arrayBuffer);
        const copiedPages = await pdfDoc.copyPages(
          donorPdfDoc,
          donorPdfDoc.getPageIndices()
        );
        copiedPages.forEach((page) => pdfDoc.addPage(page));
      }

      const mergedPdfBytes = await pdfDoc.save();
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });

      setMergedPdfBlob(blob);
      setError(""); // Clear previous errors
    } catch (error) {
      setError("An error occurred while merging the files. Please try again.");
      console.error("Merge error:", error);
    }
  };

  const handleClearFiles = () => {
    setSelectedFiles([]);
    setMergedPdfBlob(null);
    setError("");
  };

  const handleDownload = () => {
    if (mergedPdfBlob) {
      const link = document.createElement("a");
      const url = URL.createObjectURL(mergedPdfBlob);
      link.href = url;
      link.download = "merged.pdf";
      link.click();
      URL.revokeObjectURL(url); // Clean up the URL object
    }
  };

  return (
    <div className="merge-pdf-container">
      <h1>Merge PDF Tool</h1>
      <p>Upload your PDF files to merge them into a single document.</p>

      {/* Display Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Drag-and-Drop Area */}
      <div
        className="dropbox"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop up to 5 PDF files here</p>
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
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div className="action-buttons">
        {selectedFiles.length > 0 && (
          <>
            <button onClick={handleMerge} className="merge-button">
              Merge PDFs
            </button>
            <button onClick={handleClearFiles} className="clear-button">
              Clear Files
            </button>
          </>
        )}
        {mergedPdfBlob && (
          <button onClick={handleDownload} className="download-button">
            Download Merged PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default MergePDF;