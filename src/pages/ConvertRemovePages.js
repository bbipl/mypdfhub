import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertRemovePages = () => {
  const location = useLocation();
  const file = location.state?.file || null;
  const [pagesToRemove, setPagesToRemove] = useState("");

  const handleRemovePages = () => {
    if (!pagesToRemove) {
      alert("Please specify the pages to remove.");
      return;
    }
    alert(`Removing pages: ${pagesToRemove} from file "${file.name}"`);
    // Logic to remove pages from the PDF goes here
  };

  const handleDownload = () => {
    alert("Downloading the updated PDF...");
    // Logic to download the updated PDF goes here
  };

  return (
    <div className="convert-remove-pages-container">
      <h1>Remove Pages Options</h1>
      {file ? (
        <>
          <p>File to modify: {file.name}</p>
          <div className="remove-options">
            <label htmlFor="pages-to-remove">
              Enter pages to remove (e.g., "1,2,4-6"):
            </label>
            <input
              type="text"
              id="pages-to-remove"
              value={pagesToRemove}
              onChange={(e) => setPagesToRemove(e.target.value)}
              placeholder="1,2,4-6"
            />
          </div>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleRemovePages}>
              Remove Pages
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download Updated PDF
            </button>
          </div>
        </>
      ) : (
        <p>No file uploaded.</p>
      )}
    </div>
  );
};

export default ConvertRemovePages;
