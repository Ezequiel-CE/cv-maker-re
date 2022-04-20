import Main from "./components/views/Main";
import Navbar from "./components/NavBar";
import DataProvider from "./store/DataProvider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Preview from "./components/views/Preview";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <DataProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>

      <Box textAlign="center" sx={{ padding: "0 0 40px 0" }}>
        <Button
          component={Link}
          to="/preview"
          variant="contained"
          sx={{ fontSize: "30px" }}
        >
          Preview
        </Button>
      </Box>
    </DataProvider>
  );
};

export default App;
