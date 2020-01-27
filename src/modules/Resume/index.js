import React from 'react';

import iconPDF from '../../assets/images/download-pdf.svg';
import iconDOC from '../../assets/images/download-doc.svg';
import documentPDF from '../../assets/docs/andrew-zacharia.pdf';
import documentDOC from '../../assets/docs/andrew-zacharia.doc';

// eslint-disable-next-line no-unused-vars
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const Resume = () => (
<div className="aaz-container justify-top">
  <div className="w-100 dt no-repeat bg-center cover center w-100">
    <div className="mw8 center">
      <div className="pa2 pt0 tl">
        <div class="tr ph2">
          <a
          className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow"
          href={documentPDF}
          target="_blank"
          rel="noopener noreferrer"
          >
            <img
              src={iconPDF}
              className="aaz-icon-linkedin w2"
              alt="Download resume in PDF format"
            />
          </a>

          <a
            className="f6 fw4 hover-white no-underline white-70 dib ml2 pv1 pl1 grow"
            href={documentDOC}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconDOC}
              className="aaz-icon-linkedin w2"
              alt="Download resume in DOC format"
            />
          </a>
        </div>

        {/* START POSTER */}
        <div className="w-100 ph2 relative overflow-hidden">
          <iframe
            title="Andrew's Resume"
            src={documentPDF}
            height="800"
            allowtransparency={true.toString()}
            allowFullScreen={true}
            className="w-100 h-5 ba0 bg-transparent bw0"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Resume;