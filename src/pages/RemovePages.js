import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/pages.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const RemovePages = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfPages, setPdfPages] = useState([]);
  const [selectedPages, setSelectedPages] = useState([]);
  const [error, setError] = useState("");
  const [updatedPdfBlob, setUpdatedPdfBlob] = useState(null);
  const [fileLoaded, setFileLoaded] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }

    setError("");
    setSelectedFile(file);
    setPdfPages([]);
    setFileLoaded(false);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pageCount = pdfDoc.getPageCount();

      setPdfPages(Array.from({ length: pageCount }, (_, i) => i + 1));
      setFileLoaded(true);
    } catch (err) {
      console.error("Error loading PDF:", err);
      setError("Failed to load the PDF. Please try again.");
    }
  };

  const handlePageSelection = (pageNumber) => {
    setSelectedPages((prevSelected) =>
      prevSelected.includes(pageNumber)
        ? prevSelected.filter((page) => page !== pageNumber)
        : [...prevSelected, pageNumber]
    );
  };

  const handleRemovePages = async () => {
    if (!selectedFile) {
      setError("Please upload a PDF file first.");
      return;
    }

    if (selectedPages.length === 0) {
      setError("Please select pages to remove.");
      return;
    }

    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const remainingPages = pdfDoc.getPageIndices().filter(
        (index) => !selectedPages.includes(index + 1)
      );

      const newPdfDoc = await PDFDocument.create();
      for (const pageIndex of remainingPages) {
        const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageIndex]);
        newPdfDoc.addPage(copiedPage);
      }

      const updatedPdfBytes = await newPdfDoc.save();
      setUpdatedPdfBlob(new Blob([updatedPdfBytes], { type: "application/pdf" }));
      setError("");
    } catch (err) {
      console.error("Error removing pages:", err);
      setError("An error occurred while removing pages. Please try again.");
    }
  };

  const handleDownload = () => {
    if (updatedPdfBlob) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(updatedPdfBlob);
      link.download = "updated.pdf";
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  return (
    <div className="remove-pages-container">
      <h1>Remove Pages from PDF</h1>
      <p>Upload a PDF file, select pages to remove, and download the updated PDF.</p>

      {error && <p className="error-message">{error}</p>}

      <div className="dropbox">
        <label className="file-upload-button">
          Select File
          <input type="file" accept="application/pdf" onChange={handleFileChange} hidden />
        </label>
      </div>

      {fileLoaded && (
        <div className="page-preview">
          <h3>Select Pages to Remove:</h3>
          <div className="pages-container">
            {pdfPages.map((pageNumber) => (
              <div key={pageNumber} className="page-item">
                <p>Page {pageNumber}</p>
                <input
                  type="checkbox"
                  checked={selectedPages.includes(pageNumber)}
                  onChange={() => handlePageSelection(pageNumber)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="action-buttons">
        {fileLoaded && (
          <button onClick={handleRemovePages} className="remove-button">
            Remove Selected Pages
          </button>
        )}

        {updatedPdfBlob && (
          <button onClick={handleDownload} className="download-button">
            Download Updated PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default RemovePages;
