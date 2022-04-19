import React, { useReducer, useCallback } from "react";
import DataContext from "./data-context";
import uniqid from "uniqid";

const initialDataState = {
  personalInfo: {},
  educationInfo: [
    {
      name: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ],
  workInfo: [],
};

const dataReducer = (state, action) => {
  if (action.type === "ADD PERSONAL DATA") {
    return { ...state, personalInfo: action.value };
  }

  if (action.type === "ADD NEW EDUCATION DATA") {
    const newEducationInfo = [...state.educationInfo, action.value];
    return { ...state, educationInfo: newEducationInfo };
  }

  if (action.type === "DELETE EDUCATION ITEM") {
    const newEducationState = state.educationInfo.filter(
      (form) => form.id !== action.value
    );

    return { ...state, educationInfo: newEducationState };
  }

  if (action.type === "UPDATE EDUCATION DATA") {
    const formIndex = state.educationInfo.findIndex(
      (dataEdu) => dataEdu.id === action.value.id
    );
    const newEducationInfo = [...state.educationInfo];
    newEducationInfo[formIndex] = action.value;
    return { ...state, educationInfo: newEducationInfo };
  }

  return state;
};

const DataProvider = ({ children }) => {
  const [dataState, dispatchDataAction] = useReducer(
    dataReducer,
    initialDataState
  );

  //FUNCIONES

  //useCallback recuerda la funcion para evitar el renderizado del componente que la utilize
  const addPersonalDataHandler = useCallback(
    (data) => {
      dispatchDataAction({ type: "ADD PERSONAL DATA", value: data });
    },
    [dispatchDataAction]
  );

  const addNewEducationDataHandler = () => {
    dispatchDataAction({
      type: "ADD NEW EDUCATION DATA",
      value: {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    });
  };

  const deleteEducationHandler = (id) => {
    dispatchDataAction({ type: "DELETE EDUCATION ITEM", value: id });
  };

  const updateEducationHandler = useCallback(
    (id, data) => {
      const newDataedu = { ...data, id: id };
      dispatchDataAction({
        type: "UPDATE EDUCATION DATA",
        value: newDataedu,
      });
    },
    [dispatchDataAction]
  );

  const dataContext = {
    personalInfo: dataState.personalInfo,
    educationInfo: dataState.educationInfo,
    workInfo: [],
    addPersonalData: addPersonalDataHandler,
    addNewEducationData: addNewEducationDataHandler,
    deleteEducationForm: deleteEducationHandler,
    updateEducationData: updateEducationHandler,
    removeItems: (id) => {},
    clearCart: () => {},
  };
  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
