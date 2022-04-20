import React from "react";
import Container from "@mui/material/Container";
import PersonalForm from "../main/Personal/PersonalForm";
import Education from "../main/Education/Education";
import Work from "../main/Work/Work";

const Main = () => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "#EEEEEE",
          padding: "50px",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "10px",
        }}
      >
        <PersonalForm />
        <Education />
        <Work />
      </Container>
    </>
  );
};

export default Main;
