import React, { useContext, useReducer, useEffect } from "react";
import TextField from "@mui/material/TextField";
import DataContext from "../../../store/data-context";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const initialState = { position: "", company: "", city: "", from: "", to: "" };

const workReducer = (state, action) => {
  if (action.type === "POSITION INPUT") {
    return { ...state, position: action.value };
  }
  if (action.type === "COMPANY INPUT") {
    return { ...state, company: action.value };
  }
  if (action.type === "CITY INPUT") {
    return { ...state, city: action.value };
  }
  if (action.type === "FROM INPUT") {
    return { ...state, from: action.value };
  }
  if (action.type === "TO INPUT") {
    return { ...state, to: action.value };
  }

  return state;
};

const WorkForm = ({ data }) => {
  const [workState, dispatchWorkAction] = useReducer(workReducer, initialState);
  const { deleteWorkData, updateWorkData } = useContext(DataContext);

  const { id } = data;
  useEffect(() => {
    updateWorkData(id, workState);
  }, [workState, updateWorkData, id]);

  const positionHandler = (e) => {
    dispatchWorkAction({ type: "POSITION INPUT", value: e.target.value });
  };
  const companyHandler = (e) => {
    dispatchWorkAction({ type: "COMPANY INPUT", value: e.target.value });
  };
  const cityHandler = (e) => {
    dispatchWorkAction({ type: "CITY INPUT", value: e.target.value });
  };
  const fromHandler = (e) => {
    dispatchWorkAction({ type: "FROM INPUT", value: e.target.value });
  };
  const toHandler = (e) => {
    dispatchWorkAction({ type: "TO INPUT", value: e.target.value });
  };

  return (
    <>
      <form>
        <TextField
          id="outlined-basic"
          label="Position"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={positionHandler}
          value={workState.position}
        />
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={companyHandler}
          value={workState.company}
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={cityHandler}
          value={workState.city}
        />
        <TextField
          id="outlined-basic"
          label="from"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={fromHandler}
          value={workState.from}
        />
        <TextField
          id="outlined-basic"
          label="to"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={toHandler}
          value={workState.to}
        />
      </form>
      <Box textAlign="end" sx={{ padding: "10px 0 20px 0" }}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => deleteWorkData(data.id)}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

export default WorkForm;
