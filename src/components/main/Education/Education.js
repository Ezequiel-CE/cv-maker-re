import React, { useContext } from "react";
import EducationForm from "./EducationForm";
import Typography from "@mui/material/Typography";
import DataContext from "../../../store/data-context";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

const Education = () => {
  const { educationInfo, addNewEducationData } = useContext(DataContext);

  return (
    <>
      <Typography variant="h3" sx={{ padding: "20px 0 20px 0" }}>
        Education Information
      </Typography>
      {educationInfo.map((eduData) => (
        <EducationForm key={eduData.id} educationData={eduData} />
      ))}
      <Box textAlign="center" sx={{ padding: "10px 0 20px 0" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px 0 20px 0" }}
          onClick={addNewEducationData}
          startIcon={<AddIcon />}
        >
          Add Education
        </Button>
      </Box>
    </>
  );
};

export default Education;
