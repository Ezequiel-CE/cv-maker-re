import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import DataContext from "../../../store/data-context";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const WorkForm = ({ workData }) => {
  const { deleteWorkData, updateWorkInfo } = useContext(DataContext);

  const { position, company, city, from, to, id, description } = workData;

  return (
    <>
      <form>
        <TextField
          name="position"
          id="outlined-basic"
          label="Position"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateWorkInfo(e, id)}
          value={position}
        />
        <TextField
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateWorkInfo(e, id)}
          value={description}
        />
        <TextField
          name="company"
          id="outlined-basic"
          label="Company"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={(e) => updateWorkInfo(e, id)}
          value={company}
        />
        <TextField
          name="city"
          id="outlined-basic"
          label="City"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={(e) => updateWorkInfo(e, id)}
          value={city}
        />
        <TextField
          name="from"
          id="outlined-basic"
          label="from"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateWorkInfo(e, id)}
          value={from}
        />
        <TextField
          name="to"
          id="outlined-basic"
          label="to"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={(e) => updateWorkInfo(e, id)}
          value={to}
        />
      </form>
      <Box textAlign="end" sx={{ padding: "10px 0 20px 0" }}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => deleteWorkData(id)}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

export default WorkForm;
