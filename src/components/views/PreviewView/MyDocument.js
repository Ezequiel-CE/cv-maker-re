import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import LeftSection from "./LeftSection";
import style from "./pdfStyle";

// Create Document Component
const MyDocument = ({ personalInfo, educationInfo, workInfo }) => {
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <LeftSection data={personalInfo} />
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
