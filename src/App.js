import Main from "./components/views/mainView/Main";
import Navbar from "./components/NavBar";
import DataProvider from "./store/DataProvider";

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
    </DataProvider>
  );
};

export default App;
