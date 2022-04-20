import React from "react";

const DataContext = React.createContext({
  personalInfo: {},
  educationInfo: [],
  workInfo: [],
  addPersonalData: (data) => {},
  addNewEducationData: () => {},
  deleteEducationData: (id) => {},
  updateEducationData: (id, data) => {},
  addNewWorkData: () => {},
  deleteWorkData: (id) => {},
  updateWorkData: (id, data) => {},
});

export default DataContext;
