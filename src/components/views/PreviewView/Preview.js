import React, { useContext, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DataContext from "../../../store/data-context";

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

  return (
    <>
      <Container
        sx={{
          bgcolor: "#EEEEEE",
          padding: "50px",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "10px",
          height: width > 600 ? "129.5vh" : "60vh",
          textAlign: "center",
        }}
      >
        <PDFViewer
          showToolbar={false}
          style={{
            width: width > 600 ? "70.5%" : "100%",
            height: "100%",
          }}
        >
          <MyDocument
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
          />
        </PDFViewer>
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
