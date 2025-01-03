import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import './styles/Hero.css';
import './styles/ToolsGrid.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// Import pages for individual tools
import MergePDF from './pages/MergePDF';
import ConvertMergePDF from "./pages/ConvertMergePDF";
import SplitPDF from './pages/SplitPDF';
import ConvertSplitPDF from "./pages/ConvertSplitPDF";
import RemovePages from './pages/RemovePages';
import ConvertRemovePages from "./pages/ConvertRemovePages";
import ExtractPages from './pages/ExtractPages';
import ConvertExtractPages from "./pages/ConvertExtractPages";
import OrganizePDF from './pages/OrganizePDF';
import ConvertOrganizePDF from "./pages/ConvertOrganizePDF";
import ScanToPDF from './pages/ScanToPDF';
import ConvertScanToPDF from "./pages/ConvertScanToPDF";
import CompressPDF from './pages/CompressPDF';
import RepairPDF from './pages/RepairPDF';
import ConvertRepairPDF from "./pages/ConvertRepairPDF";
import OCRPDF from './pages/OCRPDF';
import ConvertOCRPDF from "./pages/ConvertOCRPDF";
import JPGToPDF from './pages/JPGToPDF';
import WordToPDF from './pages/WordToPDF';
import ConvertWordToPDF from "./pages/ConvertWordToPDF";
import PowerPointToPDF from './pages/PowerPointToPDF';
import ExcelToPDF from './pages/ExcelToPDF';
import ConvertExcelToPDF from "./pages/ConvertExcelToPDF";
import HTMLToPDF from './pages/HTMLToPDF';
import ConvertHTMLToPDF from "./pages/ConvertHTMLToPDF";
import PDFToJPG from './pages/PDFToJPG';
import ConvertPDFToJPG from "./pages/ConvertPDFToJPG";
import PDFToWord from './pages/PDFToWord';
import ConvertPDFToWord from "./pages/ConvertPDFToWord";
import PDFToPowerPoint from './pages/PDFToPowerPoint';
import ConvertPDFToPowerPoint from "./pages/ConvertPDFToPowerPoint";
import PDFToExcel from './pages/PDFToExcel';
import ConvertPDFToExcel from "./pages/ConvertPDFToExcel";
import PDFToPDFA from './pages/PDFToPDFA';
import ConvertPDFToPDFA from "./pages/ConvertPDFToPDFA";
import RotatePDF from './pages/RotatePDF';
import AddPageNumbers from './pages/AddPageNumbers';
import AddWatermark from './pages/AddWatermark';
import EditPDF from './pages/EditPDF';
import UnlockPDF from './pages/UnlockPDF';
import ProtectPDF from './pages/ProtectPDF';
import SignPDF from './pages/SignPDF';
import RedactPDF from './pages/RedactPDF';
import ComparePDF from './pages/ComparePDF';
import ConvertPDF from './pages/ConvertPDF';
import ConvertPowerPointToPDF from "./pages/ConvertPowerPointToPDF";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <ToolsGrid />
              
            </>
          } />
              
          
          {/* Add routes for individual tools */}
          <Route path="/merge-pdf" element={<MergePDF />} />
          <Route path="/merge-pdf-options" element={<ConvertMergePDF />} />
          <Route path="/split-pdf" element={<SplitPDF />} />
          <Route path="/split-pdf-options" element={<ConvertSplitPDF />} />
          <Route path="/remove-pages" element={<RemovePages />} />
          <Route path="/remove-pages-options" element={<ConvertRemovePages />} />
          <Route path="/extract-pages" element={<ExtractPages />} />
          <Route path="/extract-pages-options" element={<ConvertExtractPages />} />
          <Route path="/organize-pdf" element={<OrganizePDF />} />
          <Route path="/organize-pdf-options" element={<ConvertOrganizePDF />} />
          <Route path="/scan-to-pdf" element={<ScanToPDF />} />
          <Route path="/scan-to-pdf-options" element={<ConvertScanToPDF />} />
          <Route path="/compress-pdf" element={<CompressPDF />} />
          <Route path="/repair-pdf" element={<RepairPDF />} />
          <Route path="/repair-pdf-options" element={<ConvertRepairPDF />} />
          <Route path="/ocr-pdf" element={<OCRPDF />} />
          <Route path="/ocr-pdf-options" element={<ConvertOCRPDF />} />
          <Route path="/jpg-to-pdf" element={<JPGToPDF />} />
          <Route path="/convert-pdf" element={<ConvertPDF />} />
          <Route path="/word-to-pdf" element={<WordToPDF />} />
          <Route path="/convert-word-to-pdf" element={<ConvertWordToPDF />} />
          <Route path="/powerpoint-to-pdf" element={<PowerPointToPDF />} />
          <Route path="/convert-powerpoint-to-pdf" element={<ConvertPowerPointToPDF />} />
          <Route path="/excel-to-pdf" element={<ExcelToPDF />} />
          <Route path="/convert-excel-to-pdf" element={<ConvertExcelToPDF />} />
          <Route path="/html-to-pdf" element={<HTMLToPDF />} />
          <Route path="/convert-html-to-pdf" element={<ConvertHTMLToPDF />} />
          <Route path="/pdf-to-jpg" element={<PDFToJPG />} />
          <Route path="/convert-pdf-to-jpg" element={<ConvertPDFToJPG />} />
          <Route path="/pdf-to-word" element={<PDFToWord />} />
          <Route path="/convert-pdf-to-word" element={<ConvertPDFToWord />} />
          <Route path="/pdf-to-powerpoint" element={<PDFToPowerPoint />} />
          <Route path="/convert-pdf-to-powerpoint" element={<ConvertPDFToPowerPoint />} />
          <Route path="/pdf-to-excel" element={<PDFToExcel />} />
          <Route path="/convert-pdf-to-excel" element={<ConvertPDFToExcel />} />
          <Route path="/pdf-to-pdf-a" element={<PDFToPDFA />} />
          <Route path="/convert-pdf-to-pdf-a" element={<ConvertPDFToPDFA />} />
          <Route path="/rotate-pdf" element={<RotatePDF />} />
          <Route path="/add-page-numbers" element={<AddPageNumbers />} />
          <Route path="/add-watermark" element={<AddWatermark />} />
          <Route path="/edit-pdf" element={<EditPDF />} />
          <Route path="/unlock-pdf" element={<UnlockPDF />} />
          <Route path="/protect-pdf" element={<ProtectPDF />} />
          <Route path="/sign-pdf" element={<SignPDF />} />
          <Route path="/redact-pdf" element={<RedactPDF />} />
          <Route path="/compare-pdf" element={<ComparePDF />} />
        </Routes>
        <Footer /> {/* Footer is displayed below all content */}
      </div>
    </Router>
  );
}

export default App;
