import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaObjectGroup, FaFileAlt, FaFileUpload, FaFileDownload,
  FaFileWord, FaFileExcel, FaFilePowerpoint, FaImage,
  FaCompressArrowsAlt, FaWrench, FaCrop, FaLock,
  FaUnlock, FaEdit, FaFont, FaWater, FaSignature,
  FaEye, FaFileContract, FaHtml5, FaRegFileAlt
} from 'react-icons/fa';

const ToolsGrid = () => {
  const categories = [
    {
      title: "ORGANIZE PDF",
      tools: [
        {
          id: 'merge',
          name: 'Merge PDF',
          icon: <FaObjectGroup />,
          path: '/merge-pdf',
          description: 'Combine PDFs in the order you want'
        },
        {
          id: 'split',
          name: 'Split PDF',
          icon: <FaCrop />,
          path: '/split-pdf',
          description: 'Separate one PDF into multiple PDFs'
        },
        {
          id: 'remove-pages',
          name: 'Remove Pages',
          icon: <FaFileAlt />,
          path: '/remove-pages',
          description: 'Delete pages from a PDF'
        },
        {
          id: 'extract-pages',
          name: 'Extract Pages',
          icon: <FaFileDownload />,
          path: '/extract-pages',
          description: 'Extract pages from a PDF'
        },
        {
          id: 'organize',
          name: 'Organize PDF',
          icon: <FaObjectGroup />,
          path: '/organize-pdf',
          description: 'Sort PDF pages'
        },
        {
          id: 'scan',
          name: 'Scan to PDF',
          icon: <FaFileUpload />,
          path: '/scan-to-pdf',
          description: 'Create PDF from scanned documents'
        }
      ]
    },
    {
      title: "OPTIMIZE PDF",
      tools: [
        {
          id: 'compress',
          name: 'Compress PDF',
          icon: <FaCompressArrowsAlt />,
          path: '/compress-pdf',
          description: 'Reduce PDF file size'
        },
        {
          id: 'repair',
          name: 'Repair PDF',
          icon: <FaWrench />,
          path: '/repair-pdf',
          description: 'Repair damaged PDF'
        },
        {
          id: 'ocr',
          name: 'OCR PDF',
          icon: <FaFont />,
          path: '/ocr-pdf',
          description: 'Make PDF searchable'
        }
      ]
    },
    {
      title: "CONVERT TO PDF",
      tools: [
        {
          id: 'jpg-to-pdf',
          name: 'JPG to PDF',
          icon: <FaImage />,
          path: '/jpg-to-pdf',
          description: 'Convert images to PDF'
        },
        {
          id: 'word-to-pdf',
          name: 'WORD to PDF',
          icon: <FaFileWord />,
          path: '/word-to-pdf',
          description: 'Convert Word to PDF'
        },
        {
          id: 'powerpoint-to-pdf',
          name: 'POWERPOINT to PDF',
          icon: <FaFilePowerpoint />,
          path: '/powerpoint-to-pdf',
          description: 'Convert PowerPoint to PDF'
        },
        {
          id: 'excel-to-pdf',
          name: 'EXCEL to PDF',
          icon: <FaFileExcel />,
          path: '/excel-to-pdf',
          description: 'Convert Excel to PDF'
        },
        {
          id: 'html-to-pdf',
          name: 'HTML to PDF',
          icon: <FaHtml5 />,
          path: '/html-to-pdf',
          description: 'Convert HTML to PDF'
        }
      ]
    },
    {
      title: "CONVERT FROM PDF",
      tools: [
        {
          id: 'pdf-to-jpg',
          name: 'PDF to JPG',
          icon: <FaImage />,
          path: '/pdf-to-jpg',
          description: 'Convert PDF to Images'
        },
        {
          id: 'pdf-to-word',
          name: 'PDF to WORD',
          icon: <FaFileWord />,
          path: '/pdf-to-word',
          description: 'Convert PDF to Word'
        },
        {
          id: 'pdf-to-powerpoint',
          name: 'PDF to POWERPOINT',
          icon: <FaFilePowerpoint />,
          path: '/pdf-to-powerpoint',
          description: 'Convert PDF to PowerPoint'
        },
        {
          id: 'pdf-to-excel',
          name: 'PDF to EXCEL',
          icon: <FaFileExcel />,
          path: '/pdf-to-excel',
          description: 'Convert PDF to Excel'
        },
        {
          id: 'pdf-to-pdf-a',
          name: 'PDF to PDF/A',
          icon: <FaRegFileAlt />,
          path: '/pdf-to-pdf-a',
          description: 'Convert PDF to PDF/A'
        }
      ]
    },
    {
      title: "EDIT PDF",
      tools: [
        {
          id: 'rotate-pdf',
          name: 'Rotate PDF',
          icon: <FaEdit />,
          path: '/rotate-pdf',
          description: 'Rotate PDF pages'
        },
        {
          id: 'add-page-numbers',
          name: 'Add Page Numbers',
          icon: <FaFont />,
          path: '/add-page-numbers',
          description: 'Add page numbers to PDF'
        },
        {
          id: 'add-watermark',
          name: 'Add Watermark',
          icon: <FaWater />,
          path: '/add-watermark',
          description: 'Add watermark to PDF'
        },
        {
          id: 'edit-pdf',
          name: 'Edit PDF',
          icon: <FaEdit />,
          path: '/edit-pdf',
          description: 'Edit PDF content'
        }
      ]
    },
    {
      title: "PDF SECURITY",
      tools: [
        {
          id: 'unlock-pdf',
          name: 'Unlock PDF',
          icon: <FaUnlock />,
          path: '/unlock-pdf',
          description: 'Remove PDF password'
        },
        {
          id: 'protect-pdf',
          name: 'Protect PDF',
          icon: <FaLock />,
          path: '/protect-pdf',
          description: 'Add password to PDF'
        },
        {
          id: 'sign-pdf',
          name: 'Sign PDF',
          icon: <FaSignature />,
          path: '/sign-pdf',
          description: 'Sign PDF digitally'
        },
        {
          id: 'redact-pdf',
          name: 'Redact PDF',
          icon: <FaEye />,
          path: '/redact-pdf',
          description: 'Hide sensitive information'
        },
        {
          id: 'compare-pdf',
          name: 'Compare PDF',
          icon: <FaFileContract />,
          path: '/compare-pdf',
          description: 'Compare two PDFs'
        }
      ]
    }
  ];

  return (
    <div className="tools-container">
      {categories.map((category) => (
        <div key={category.title} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <div className="tools-grid">
            {category.tools.map((tool) => (
              <Link to={tool.path} key={tool.id} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsGrid;