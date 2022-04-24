import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Typography
        variant="h1"
        align="center"
        sx={{
          padding: "30px 0 ",
          fontWeight: "400",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactPageIcon sx={{ fontSize: "60px" }} />
        CV Maker
      </Typography>
    </AppBar>
  );
};

export default Navbar;
