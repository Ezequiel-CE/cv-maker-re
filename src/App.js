import Main from "./components/views/mainView/Main";
import Navbar from "./components/NavBar";
import DataProvider from "./store/DataProvider";
import Preview from "./components/views/PreviewView/Preview";

import { Routes, Route } from "react-router-dom";

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
