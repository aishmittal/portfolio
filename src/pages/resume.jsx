import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import SEO from '../components/Seo';

export default class Resume extends Component {
  constructor() {
    super();
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  render() {
    return (
      <div>
        <SEO
          title="Resume"
          description="My resume consists of my biodata of experience."
          path="resume"
        />
        <Document
          file="../Aishwarya_Mittal_Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}
