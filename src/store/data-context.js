import React from "react";

const DataContext = React.createContext({
  personalInfo: {},
  educationInfo: [],
  workInfo: [],
  addPersonalData: (data) => {},
  removeItems: (id) => {},
  clearCart: () => {},
});

export default DataContext;
