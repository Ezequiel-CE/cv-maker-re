import React, { useState } from "react";
import Container from "@mui/material/Container";
import PersonalForm from "../../main/Personal/PersonalForm";
import Education from "../../main/Education/Education";
import Work from "../../main/Work/Work";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import TabPanel from "./TabPanel";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Main = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container
        sx={{
          bgcolor: "#EEEEEE",
          padding: "20px 0",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
            centered
            variant="fullWidth"
          >
            <Tab icon={<PersonIcon />} label="Personal" />
            <Tab icon={<SchoolIcon />} label="Education" />
            <Tab icon={<WorkIcon />} label="Work" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <PersonalForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Work />
        </TabPanel>
      </Container>
      <Box textAlign="center" sx={{ padding: "0 0 40px 0" }}>
        <Button
          component={Link}
          to="/preview"
          variant="contained"
          sx={{ fontSize: "18px", padding: "5px 16px", borderRadius: "20px" }}
          endIcon={<ArrowForwardIosIcon />}
        >
          Preview
        </Button>
      </Box>
    </>
  );
};

export default Main;
