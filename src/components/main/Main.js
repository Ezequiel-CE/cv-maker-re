import React, { useContext } from "react";
import Container from "@mui/material/Container";
import PersonalForm from "./Personal/PersonalForm";
import DataContext from "../../store/data-context";

const Main = () => {
  const dataCTX = useContext(DataContext);

  return (
    <>
      <Container
        sx={{
          bgcolor: "#EEEEEE",
          height: "100vh",
          padding: "50px",
        }}
      >
        <PersonalForm />
        <button
          onClick={() => {
            console.log(dataCTX);
          }}
        >
          see context
        </button>
      </Container>
    </>
  );
};

export default Main;
