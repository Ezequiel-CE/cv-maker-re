import React, { useReducer, useCallback } from "react";
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

  //useCallback recuerda la funcion para evitar el renderizado del componente que la uitilize
  const addPersonalDataHandler = useCallback(
    (data) => {
      console.log(data);

      dispatchDataAction({ type: "ADD PERSONAL DATA", value: data });
    },
    [dispatchDataAction]
  );

  const dataContext = {
    personalInfo: dataState.personalInfo,
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
