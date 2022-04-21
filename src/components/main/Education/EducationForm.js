import React, { useReducer, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import DataContext from "../../../store/data-context";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const educationReducer = (state, action) => {
  if (action.type === "UNIVERSITYNAME INPUT") {
    return { ...state, universityName: action.value };
  }
  if (action.type === "CITY INPUT") {
    return { ...state, city: action.value };
  }
  if (action.type === "DEGREE INPUT") {
    return { ...state, degree: action.value };
  }
  if (action.type === "SUBJECT INPUT") {
    return { ...state, subject: action.value };
  }
  if (action.type === "FROM INPUT") {
    return { ...state, from: action.value };
  }
  if (action.type === "TO INPUT") {
    return { ...state, to: action.value };
  }

  return state;
};

const EducationForm = ({ educationData }) => {
  //use the context provider to initialize the state
  const [educationState, dispatchEducationAction] = useReducer(
    educationReducer,
    educationData
  );
  const { deleteEducationData, updateEducationData } = useContext(DataContext);

  const { id } = educationData;

  useEffect(() => {
    updateEducationData(id, educationState);
  }, [educationState, updateEducationData, id]);

  const universityNameHandler = (e) => {
    dispatchEducationAction({
      type: "UNIVERSITYNAME INPUT",
      value: e.target.value,
    });
  };
  const cityHandler = (e) => {
    dispatchEducationAction({ type: "CITY INPUT", value: e.target.value });
  };
  const degreeHandler = (e) => {
    dispatchEducationAction({
      type: "DEGREE INPUT",
      value: e.target.value,
    });
  };
  const subjectHandler = (e) => {
    dispatchEducationAction({ type: "SUBJECT INPUT", value: e.target.value });
  };
  const fromHandler = (e) => {
    dispatchEducationAction({
      type: "FROM INPUT",
      value: e.target.value,
    });
  };
  const toHandler = (e) => {
    dispatchEducationAction({ type: "TO INPUT", value: e.target.value });
  };

  return (
    <>
      <form>
        <TextField
          id="outlined-basic"
          label="University name"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={universityNameHandler}
          value={educationData.universityName}
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={cityHandler}
          value={educationData.city}
        />
        <TextField
          id="outlined-basic"
          label="Degree"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={degreeHandler}
          value={educationData.degree}
        />
        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={subjectHandler}
          value={educationData.subject}
        />
        <TextField
          id="outlined-basic"
          label="From"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={fromHandler}
          value={educationData.from}
        />
        <TextField
          id="outlined-basic"
          label="To"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={toHandler}
          value={educationData.to}
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
