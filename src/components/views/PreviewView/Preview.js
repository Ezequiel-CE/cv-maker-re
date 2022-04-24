import React, { useContext, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import MyDocument from "./MyDocument";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DataContext from "../../../store/data-context";
import { Document, Page } from "react-pdf";
import { BlobProvider } from "@react-pdf/renderer";
import CircularProgress from "@mui/material/CircularProgress";
import "./Preview.css";
//fix for the pdf
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Preview = () => {
  const { personalInfo, educationInfo, workInfo } = useContext(DataContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleRezise = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
    };
    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  const pdf = (
    <MyDocument
      personalInfo={personalInfo}
      educationInfo={educationInfo}
      workInfo={workInfo}
    />
  );

  return (
    <>
      <Container
        sx={{
          bgcolor: "#EEEEEE",
          padding: "10px 0",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <BlobProvider document={pdf}>
          {({ blob, url, loading, error }) => {
            // blob load the data but dont show the pdf
            return loading ? (
              <CircularProgress />
            ) : (
              <Document
                file={url}
                loading={<CircularProgress />}
                className="center"
              >
                <Page pageNumber={1} width={width > 786 ? 810 : 350} />
              </Document>
            );
          }}
        </BlobProvider>
      </Container>
      <Box textAlign="center" sx={{ padding: "0 0 40px 0" }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ fontSize: "30px" }}
        >
          Continue editing
        </Button>
      </Box>
    </>
  );
};

export default Preview;
