import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Handle the file download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "output.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during file upload.");
    }
  };

  return (
    <div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={handleFileChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload and Process
      </button>
    </div>
  );
};

export default FileUploader;
