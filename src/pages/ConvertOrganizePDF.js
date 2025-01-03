import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertOrganizePDF = () => {
  const location = useLocation();
  const file = location.state?.file || null;
  const [pageOrder, setPageOrder] = useState("");

  const handleOrganize = () => {
    if (!pageOrder) {
      alert("Please specify the new page order.");
      return;
    }
    alert(`Reorganizing pages of "${file.name}" in order: ${pageOrder}`);
    // Logic to reorganize pages in the PDF goes here
  };

  const handleDownload = () => {
    alert("Downloading the organized PDF...");
    // Logic to download the organized PDF goes here
  };

  return (
    <div className="convert-organize-pdf-container">
      <h1>Organize PDF Options</h1>
      {file ? (
        <>
          <p>File to modify: {file.name}</p>
          <div className="organize-options">
            <label htmlFor="page-order">
              Enter new page order (e.g., "3,1,2,5-7"):
            </label>
            <input
              type="text"
              id="page-order"
              value={pageOrder}
              onChange={(e) => setPageOrder(e.target.value)}
              placeholder="3,1,2,5-7"
            />
          </div>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleOrganize}>
              Organize PDF
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download Organized PDF
            </button>
          </div>
        </>
      ) : (
        <p>No file uploaded.</p>
      )}
    </div>
  );
};

export default ConvertOrganizePDF;
