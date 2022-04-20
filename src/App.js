import Main from "./components/views/Main";
import Navbar from "./components/NavBar";
import DataProvider from "./store/DataProvider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <DataProvider>
      <Navbar />
      <Main />
      <Box textAlign="center" sx={{ padding: "0 0 40px 0" }}>
        <Button variant="contained" sx={{ fontSize: "30px" }}>
          Preview
        </Button>
      </Box>
    </DataProvider>
  );
};

export default App;
