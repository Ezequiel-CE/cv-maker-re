import React from "react";

const DataContext = React.createContext({
  personalInfo: {},
  educationInfo: [],
  workInfo: [],
  addPersonalData: (data) => {},
  deleteEducationForm: () => {},
  addNewEducationData: () => {},
  updateEducationData: () => {},
  removeItems: (id) => {},
  clearCart: () => {},
});

export default DataContext;
