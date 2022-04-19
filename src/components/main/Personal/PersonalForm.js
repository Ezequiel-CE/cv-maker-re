import React, { useReducer } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const initialState = {
  firstName: "",
  lastName: "",
  profession: "",
  address: "",
  phoneNumber: "",
  email: "",
  description: "",
};

const inputReducer = (state, action) => {
  if (action.type === "FIRSTNAME INPUT") {
    return { ...state, firstName: action.value };
  }
  if (action.type === "LASTNAME INPUT") {
    return { ...state, lastName: action.value };
  }
  if (action.type === "PROFESSION INPUT") {
    return { ...state, profession: action.value };
  }
  if (action.type === "ADDRESS INPUT") {
    return { ...state, address: action.value };
  }
  if (action.type === "PHONENUMBER INPUT") {
    return { ...state, phoneNumber: action.value };
  }
  if (action.type === "EMAIL INPUT") {
    return { ...state, email: action.value };
  }
  if (action.type === "DESCRIPTION INPUT") {
    return { ...state, description: action.value };
  }

  return state;
};

const PersonalForm = ({ getPersonalData }) => {
  //reducer to control the inputs state
  const [personalState, dispatchInputs] = useReducer(
    inputReducer,
    initialState
  );

  const firstNameHandler = (e) => {
    dispatchInputs({ type: "FIRSTNAME INPUT", value: e.target.value });
  };
  const lastNameHandler = (e) => {
    dispatchInputs({ type: "LASTNAME INPUT", value: e.target.value });
  };
  const professionHandler = (e) => {
    dispatchInputs({ type: "PROFESSION INPUT", value: e.target.value });
  };
  const addressHandler = (e) => {
    dispatchInputs({ type: "ADDRESS INPUT", value: e.target.value });
  };
  const phoneNumberHandler = (e) => {
    dispatchInputs({ type: "PHONENUMBER INPUT", value: e.target.value });
  };
  const emailHandler = (e) => {
    dispatchInputs({ type: "EMAIL INPUT", value: e.target.value });
  };
  const descriptionHandler = (e) => {
    dispatchInputs({ type: "DESCRIPTION INPUT", value: e.target.value });
  };

  return (
    <>
      <Typography variant="h3" sx={{ padding: "20px 0 20px 0" }}>
        Personal Information
      </Typography>
      <form>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={firstNameHandler}
          value={personalState.firstName}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={lastNameHandler}
          value={personalState.lastName}
        />
        <TextField
          id="outlined-basic"
          label="Profession"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={professionHandler}
          value={personalState.profession}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={addressHandler}
          value={personalState.address}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={phoneNumberHandler}
          value={personalState.phoneNumber}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={emailHandler}
          value={personalState.email}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          multiline
          rows={4}
          onChange={descriptionHandler}
          value={personalState.description}
        />
      </form>
    </>
  );
};

export default PersonalForm;
