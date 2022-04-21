import React from "react";
import Container from "@mui/material/Container";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const Preview = () => {
  return (
    <Container
      sx={{
        bgcolor: "#EEEEEE",
        padding: "50px",
        marginTop: "50px",
        marginBottom: "50px",
        borderRadius: "10px",
        height: "100vh",
      }}
    >
      <PDFViewer
        showToolbar={false}
        style={{
          width: "100%",
          height: "95%",
        }}
      >
        <MyDocument />
      </PDFViewer>
    </Container>
  );
};

export default Preview;
