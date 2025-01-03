// import React, { useState } from 'react';
// import { PDFDocument } from 'pdf-lib';
// import FileUpload from '../common/FileUpload';

// const SplitPDF = () => {
//   const [file, setFile] = useState(null);
//   const [pageRanges, setPageRanges] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleFileSelect = ([selectedFile]) => {
//     setFile(selectedFile);
//   };

//   const splitPDF = async () => {
//     if (!file || !pageRanges) {
//       alert('Please select a file and specify page ranges');
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const fileBytes = await file.arrayBuffer();
//       const pdf = await PDFDocument.load(fileBytes);
//       const totalPages = pdf.getPageCount();

//       // Parse page ranges (e.g., "1-3,5,7-9")
//       const ranges = pageRanges.split(',').map(range => {
//         const [start, end] = range.trim().split('-').map(Number);
//         return end ? { start: start - 1, end } : { start: start - 1, end: start };
//       });

//       // Create a new PDF for each range
//       for (const range of ranges) {
//         const newPdf = await PDFDocument.create();
//         const pages = await newPdf.copyPages(pdf, 
//           Array.from({ length: range.end - range.start }, (_, i) => i + range.start)
//         );
//         pages.forEach(page => newPdf.addPage(page));
        
//         const newPdfBytes = await newPdf.save();
//         const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = `split_${range.start + 1}-${range.end}.pdf`;
//         a.click();
//       }
//     } catch (error) {
//       console.error('Split failed:', error);
//       alert('Failed to split PDF. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="tool-container">
//       <h1>Split PDF</h1>
//       <p>Split your PDF into multiple files by page ranges</p>

//       <FileUpload 
//         onFileSelect={handleFileSelect}
//         multiple={false}
//       />

//       {file && (
//         <>
//           <div className="page-ranges">
//             <label htmlFor="pageRanges">Page Ranges:</label>
//             <input
//               type="text"
//               id="pageRanges"
//               value={pageRanges}
//               onChange={(e) => setPageRanges(e.target.value)}
//               placeholder="e.g., 1-3,5,7-9"
//               className="page-ranges-input"
//             />
//             <small>Separate ranges with commas. Example: 1-3,5,7-9</small>
//           </div>

//           <button 
//             className="process-button"
//             onClick={splitPDF}
//             disabled={isProcessing}
//           >
//             {isProcessing ? 'Splitting...' : 'Split PDF'}
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SplitPDF; 