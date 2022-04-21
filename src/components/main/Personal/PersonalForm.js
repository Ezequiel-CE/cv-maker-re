import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DataContext from "../../../store/data-context";

const PersonalForm = () => {
  const { personalInfo, updatePersonalInfo } = useContext(DataContext);

  return (
    <>
      <Typography variant="h3" sx={{ padding: "20px 0 20px 0" }}>
        Personal Information
      </Typography>
      <form>
        <TextField
          name="firstName"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={updatePersonalInfo}
          value={personalInfo.firstName}
        />
        <TextField
          name="lastName"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={updatePersonalInfo}
          value={personalInfo.lastName}
        />
        <TextField
          name="profession"
          id="outlined-basic"
          label="Profession"
          variant="outlined"
          fullWidth={true}
          sx={{ backgroundColor: "white" }}
          margin="dense"
          onChange={updatePersonalInfo}
          value={personalInfo.profession}
        />
        <TextField
          name="address"
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={updatePersonalInfo}
          value={personalInfo.address}
        />
        <TextField
          name="phoneNumber"
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={updatePersonalInfo}
          value={personalInfo.phoneNumber}
        />
        <TextField
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          onChange={updatePersonalInfo}
          value={personalInfo.email}
        />
        <TextField
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={{ backgroundColor: "white" }}
          fullWidth={true}
          margin="dense"
          multiline
          rows={4}
          onChange={updatePersonalInfo}
          value={personalInfo.description}
        />
      </form>
    </>
  );
};

export default PersonalForm;
