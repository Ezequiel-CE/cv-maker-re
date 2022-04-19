import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Typography
        variant="h1"
        align="center"
        sx={{ padding: "20px 0 20px 0", fontWeight: "400" }}
      >
        CV Maker
      </Typography>
    </AppBar>
  );
};

export default Navbar;
