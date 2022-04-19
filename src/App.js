import Main from "./components/main/Main";
import Navbar from "./components/NavBar";
import DataProvider from "./store/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Navbar />
      <Main />
    </DataProvider>
  );
};

export default App;
