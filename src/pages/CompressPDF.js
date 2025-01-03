import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import "../styles/pages.css";

const CompressPDF = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const [compressedPdfBlob, setCompressedPdfBlob] = useState(null);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...newFiles]);
    setError(""); // Clear previous errors
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...newFiles]);
    setError(""); // Clear previous errors
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleCompress = async () => {
    if (selectedFiles.length === 0) {
      setError("Please select at least one file to compress.");
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

        copiedPages.forEach((page) => {
          const { width, height } = page.getSize();
          const scale = 0.75; // Adjust scale to compress
          page.setSize(width * scale, height * scale);
          pdfDoc.addPage(page);
        });
      }

      const compressedPdfBytes = await pdfDoc.save();
      const blob = new Blob([compressedPdfBytes], { type: "application/pdf" });

      setCompressedPdfBlob(blob);
      setError(""); // Clear previous errors
    } catch (error) {
      setError("An error occurred while compressing the files. Please try again.");
      console.error("Compression error:", error);
    }
  };

  const handleDownload = () => {
    if (compressedPdfBlob) {
      const link = document.createElement("a");
      const url = URL.createObjectURL(compressedPdfBlob);
      link.href = url;
      link.download = "compressed.pdf";
      link.click();
      URL.revokeObjectURL(url); // Clean up the URL object
    }
  };

  const handleClearFiles = () => {
    setSelectedFiles([]);
    setCompressedPdfBlob(null);
    setError("");
  };

  return (
    <div className="compress-pdf-container">
      <h1>Compress PDF Tool</h1>
      <p>Upload your PDF files to reduce their file size.</p>

      {/* Display Error Message */}
      {error && <p className="error-message">{error}</p>}

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
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div className="action-buttons">
        {selectedFiles.length > 0 && (
          <>
            <button onClick={handleCompress} className="compress-button">
              Compress PDFs
            </button>
            <button onClick={handleClearFiles} className="clear-button">
              Clear Files
            </button>
          </>
        )}
        {compressedPdfBlob && (
          <button onClick={handleDownload} className="download-button">
            Download Compressed PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default CompressPDF;
