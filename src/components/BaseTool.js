import React, { useState } from 'react';
import FileUpload from '../common/FileUpload';
import { FaSpinner } from 'react-icons/fa';

const BaseTool = ({ 
  title, 
  description, 
  acceptedFiles = '.pdf', 
  multiple = false,
  processFiles,
  outputFileName = 'processed.pdf'
}) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (newFiles) => {
    setFiles(multiple ? prev => [...prev, ...newFiles] : newFiles);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleProcess = async () => {
    if (files.length === 0) {
      alert('Please select file(s) to process');
      return;
    }

    setIsProcessing(true);
    try {
      const result = await processFiles(files);
      
      // Download the processed file
      const url = window.URL.createObjectURL(result);
      const a = document.createElement('a');
      a.href = url;
      a.download = outputFileName;
      a.click();
    } catch (error) {
      console.error('Processing failed:', error);
      alert('Failed to process files. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="tool-container">
      <h1>{title}</h1>
      <p>{description}</p>

      <FileUpload 
        onFileSelect={handleFileSelect}
        acceptedFiles={acceptedFiles}
        multiple={multiple}
      />

      {files.length > 0 && (
        <div className="selected-files">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <span>{file.name}</span>
              <button 
                onClick={() => removeFile(index)}
                className="remove-file"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button 
        className="process-button"
        onClick={handleProcess}
        disabled={isProcessing || files.length === 0}
      >
        {isProcessing ? (
          <>
            <FaSpinner className="spinner" /> Processing...
          </>
        ) : (
          'Process Files'
        )}
      </button>
    </div>
  );
};

export default BaseTool; 