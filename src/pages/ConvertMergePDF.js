import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/pages.css";

const ConvertMergePDF = () => {
  const location = useLocation();
  const initialFiles = location.state?.files || [];

  const [pdfFiles, setPdfFiles] = useState(initialFiles);
  const [thumbnails, setThumbnails] = useState({});
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mergedFileUrl, setMergedFileUrl] = useState(null); // Store merged file URL

  // Fetch thumbnails for uploaded PDFs
  useEffect(() => {
    const fetchThumbnails = async () => {
      try {
        const formData = new FormData();
        pdfFiles.forEach((file) => formData.append("files", file));

        const response = await axios.post("http://localhost:5000/upload", formData);
        setThumbnails(response.data.thumbnails);
      } catch (error) {
        console.error("Error fetching thumbnails:", error);
      }
    };

    if (pdfFiles.length > 0) fetchThumbnails();
  }, [pdfFiles]);

  // Handle drag start
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  // Handle drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle drop
  const handleDrop = (index) => {
    if (draggedItemIndex === null || draggedItemIndex === index) return;

    const updatedFiles = [...pdfFiles];
    const draggedItem = updatedFiles.splice(draggedItemIndex, 1)[0];
    updatedFiles.splice(index, 0, draggedItem);

    setPdfFiles(updatedFiles);
    setDraggedItemIndex(null);
  };

  // Handle merging PDFs
  const handleMerge = async () => {
    setLoading(true);
    try {
      const filePaths = pdfFiles.map((file) => file.path);
      const response = await axios.post(
        "http://localhost:5000/merge",
        { files: filePaths },
        { responseType: "blob" }
      );

      // Create a downloadable link for the merged PDF
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      setMergedFileUrl(url);

      // Trigger download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "merged.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error merging PDFs:", error);
    }
    setLoading(false);
  };

  // Handle manual download if needed
  const handleDownload = () => {
    if (mergedFileUrl) {
      const link = document.createElement("a");
      link.href = mergedFileUrl;
      link.setAttribute("download", "merged.pdf");
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div className="convert-merge-pdf-container">
      <h1>Merge PDF</h1>
      <p>Drag and drop to reorder your PDFs, then click Merge PDF to combine them.</p>

      {/* Grid layout for PDF Thumbnails */}
      <div className="pdf-grid">
        {pdfFiles.map((file, index) => (
          <div
            key={index}
            className="pdf-item"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <img
              src={
                thumbnails[file.name]
                  ? `http://localhost:5000/${thumbnails[file.name][0]}` // Display first thumbnail
                  : "https://via.placeholder.com/100x140.png?text=Loading"
              }
              alt={file.name}
            />
            <p>{file.name}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className="merge-button"
          onClick={handleMerge}
          disabled={loading}
        >
          {loading ? "Merging..." : "Merge PDF"}
        </button>
        {mergedFileUrl && (
          <button className="download-button" onClick={handleDownload}>
            Download Merged PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default ConvertMergePDF;
