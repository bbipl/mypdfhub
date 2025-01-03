import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/pages.css";

const ConvertScanToPDF = () => {
  const location = useLocation();
  const files = location.state?.files || [];
  const [fileOrder, setFileOrder] = useState(files.map((file, index) => ({ id: index, name: file.name })));

  const handleReorder = (e, index) => {
    const updatedOrder = [...fileOrder];
    const [reorderedItem] = updatedOrder.splice(index, 1);
    updatedOrder.splice(e.target.value, 0, reorderedItem);
    setFileOrder(updatedOrder);
  };

  const handleGeneratePDF = () => {
    alert("Generating PDF from the uploaded files...");
    // Logic to generate PDF goes here
  };

  const handleDownload = () => {
    alert("Downloading the generated PDF...");
    // Logic to download the generated PDF goes here
  };

  return (
    <div className="convert-scan-to-pdf-container">
      <h1>Generate PDF from Scans</h1>
      {files.length > 0 ? (
        <>
          <p>Uploaded files:</p>
          <ul>
            {fileOrder.map((file, index) => (
              <li key={file.id}>
                {file.name} - Reorder to position:
                <input
                  type="number"
                  min="1"
                  max={fileOrder.length}
                  defaultValue={index + 1}
                  onChange={(e) => handleReorder(e, index)}
                />
              </li>
            ))}
          </ul>
          <div className="action-buttons">
            <button className="convert-button" onClick={handleGeneratePDF}>
              Generate PDF
            </button>
            <button className="download-button" onClick={handleDownload}>
              Download PDF
            </button>
          </div>
        </>
      ) : (
        <p>No files uploaded.</p>
      )}
    </div>
  );
};

export default ConvertScanToPDF;
