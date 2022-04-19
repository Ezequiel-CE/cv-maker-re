import React, { useContext } from "react";
import Container from "@mui/material/Container";
import PersonalForm from "./Personal/PersonalForm";
import DataContext from "../../store/data-context";
import Education from "./Education/Education";

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
      </Container>
    </>
  );
};

export default Main;
