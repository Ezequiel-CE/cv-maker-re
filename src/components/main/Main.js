import React, { useContext } from "react";
import Container from "@mui/material/Container";
import PersonalForm from "./Personal/PersonalForm";
import DataContext from "../../store/data-context";

const Main = () => {
  const dataCTX = useContext(DataContext);

  const addPersonalDataHandler = (data) => {
    console.log(data);
    dataCTX.addPersonalData(data);
  };

  return (
    <>
      <Container
        sx={{
          bgcolor: "#EEEEEE",
          height: "100vh",
          padding: "50px",
        }}
      >
        <PersonalForm getPersonalData={addPersonalDataHandler} />
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
