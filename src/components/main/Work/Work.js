import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import DataContext from "../../../store/data-context";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import WorkForm from "./WorkForm";

const Work = () => {
  const { workInfo, addNewWorkData } = useContext(DataContext);

  return (
    <>
      <Typography variant="h3" sx={{ padding: "20px 0 20px 0" }}>
        Work Information
      </Typography>
      {workInfo.map((workData) => (
        <WorkForm key={workData.id} workData={workData} />
      ))}
      <Box textAlign="center" sx={{ padding: "10px 0 20px 0" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px 0 20px 0" }}
          onClick={addNewWorkData}
          startIcon={<AddIcon />}
        >
          Add Work
        </Button>
      </Box>
    </>
  );
};

export default Work;
