import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import DataContext from "../../../store/data-context";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const EducationForm = ({ educationData }) => {
  const { deleteEducationData, updateEducationInfo } = useContext(DataContext);

  const { universityName, city, degree, subject, from, to, id } = educationData;

  return (
    <>
      <form>
        <TextField
          name="universityName"
          id="outlined-basic"
          label="University name"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateEducationInfo(e, id)}
          value={universityName}
        />
        <TextField
          name="city"
          id="outlined-basic"
          label="City"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={(e) => updateEducationInfo(e, id)}
          value={city}
        />
        <TextField
          name="degree"
          id="outlined-basic"
          label="Degree"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={(e) => updateEducationInfo(e, id)}
          value={degree}
        />
        <TextField
          name="subject"
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateEducationInfo(e, id)}
          value={subject}
        />
        <TextField
          name="from"
          id="outlined-basic"
          label="From"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateEducationInfo(e, id)}
          value={from}
        />
        <TextField
          name="to"
          id="outlined-basic"
          label="To"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateEducationInfo(e, id)}
          value={to}
        />
      </form>
      <Box textAlign="end" sx={{ padding: "10px 0 20px 0" }}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => deleteEducationData(educationData.id)}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

export default EducationForm;
