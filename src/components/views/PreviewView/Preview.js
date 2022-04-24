import React, { useContext, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import MyDocument from "./MyDocument";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DataContext from "../../../store/data-context";
import { Document, Page } from "react-pdf";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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
          padding: "40px 0",
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
                noData={<CircularProgress />}
                className="center"
              >
                <Page pageNumber={1} width={width > 786 ? 810 : 350} />
              </Document>
            );
          }}
        </BlobProvider>
      </Container>
      <Box
        sx={{
          padding: "0 0 40px 0",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ fontSize: "18px", padding: "5px 16px", borderRadius: "20px" }}
          startIcon={<ArrowBackIosNewIcon />}
        >
          editing
        </Button>
        <PDFDownloadLink
          document={pdf}
          fileName="Curriculum.pdf"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{ fontSize: "18px", padding: "5px 16px", borderRadius: "20px" }}
            endIcon={<ArrowDownwardIcon />}
          >
            Download
          </Button>
        </PDFDownloadLink>
      </Box>
    </>
  );
};

export default Preview;
