import React, { useReducer } from "react";
import DataContext from "./data-context";

const initialDataState = {
  personalInfo: {},
  educationInfo: [],
  workInfo: [],
};

const dataReducer = (state, action) => {
  if (action.type === "ADD PERSONAL DATA") {
    return { ...state, personalInfo: action.value };
  }
};

const DataProvider = ({ children }) => {
  const [dataState, dispatchDataAction] = useReducer(
    dataReducer,
    initialDataState
  );

  const addPersonalDataHandler = (data) => {
    dispatchDataAction({ type: "ADD PERSONAL DATA", value: data });
  };

  const dataContext = {
    personalInfo: dataState.personal,
    educationInfo: [],
    workInfo: [],
    addPersonalData: addPersonalDataHandler,
    removeItems: (id) => {},
    clearCart: () => {},
  };
  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
