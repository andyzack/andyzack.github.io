import React from 'react';
import iconResume from '../../assets/images/000-document-1.svg';
import documentResume from '../../assets/docs/andrew-new.pdf';

// eslint-disable-next-line no-unused-vars
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const Resume = () => (
<div className="aaz-container justify-top">
  <div className="w-100 dt no-repeat bg-center cover center w-100">
    <div className="mw8 center">
      <div className="pa2 pt0 tl">
        {/* START POSTER */}
        <div className="w-100 ph2 relative overflow-hidden">
          <iframe
            title="Andrew's Resume"
            src={documentResume}
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

export default {
    routeProps: {
        path: '/resume',
        component: Resume
    },
    name: 'Resume',
    icon: iconResume,
    imgStyle: 'aaz-icon-resume w2 bg-white-70 br-100 b--white ba',
    linkStyle: 'f6 fw4 hover-white no-underline white-70 dib-ns ml2 pv1 pl1 grow dn',
}