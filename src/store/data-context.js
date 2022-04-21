import React from "react";

const DataContext = React.createContext({
  personalInfo: {},
  educationInfo: [],
  workInfo: [],
  updatePersonalInfo: (event) => {},
  addNewEducationData: () => {},
  deleteEducationData: (id) => {},
  updateEducationInfo: (event, id) => {},
  addNewWorkData: () => {},
  deleteWorkData: (id) => {},
  updateWorkData: (id, data) => {},
});

export default DataContext;
