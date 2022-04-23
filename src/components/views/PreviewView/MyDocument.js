import React from "react";
import { Page, Document } from "@react-pdf/renderer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import style from "./pdfStyle";

// Create Document Component
const MyDocument = ({ personalInfo, educationInfo, workInfo }) => {
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <LeftSection data={personalInfo} />
        <RightSection educationData={educationInfo} workData={workInfo} />
      </Page>
    </Document>
  );
};

export default MyDocument;
