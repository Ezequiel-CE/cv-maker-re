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
  workInfo: [
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      id: uniqid(),
    },
  ],
};

const dataReducer = (state, action) => {
  if (action.type === "ADD PERSONAL DATA") {
    return { ...state, personalInfo: action.value };
  }
  //EDUCATION
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

  //WORK

  if (action.type === "ADD NEW WORK DATA") {
    const newWork = [...state.workInfo, action.value];
    return { ...state, workInfo: newWork };
  }

  if (action.type === "DELETE WORK ITEM") {
    const newWorkState = state.workInfo.filter(
      (form) => form.id !== action.value
    );

    return { ...state, workInfo: newWorkState };
  }

  if (action.type === "UPDATE WORK DATA") {
    const formIndex = state.workInfo.findIndex(
      (dataWork) => dataWork.id === action.value.id
    );
    const newWorkInfo = [...state.workInfo];
    newWorkInfo[formIndex] = action.value;
    return { ...state, workInfo: newWorkInfo };
  }

  return state;
};

const DataProvider = ({ children }) => {
  const [dataState, dispatchDataAction] = useReducer(
    dataReducer,
    initialDataState
  );

  //FUNCIONES

  //PERSONAL
  //useCallback recuerda la funcion para evitar el renderizado del componente que la utilize
  const addPersonalDataHandler = useCallback(
    (data) => {
      dispatchDataAction({ type: "ADD PERSONAL DATA", value: data });
    },
    [dispatchDataAction]
  );

  //EDUCATION
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
      const updateDataedu = { ...data, id: id };
      dispatchDataAction({
        type: "UPDATE EDUCATION DATA",
        value: updateDataedu,
      });
    },
    [dispatchDataAction]
  );

  //WORK

  const addNewWorkDataHandler = () => {
    dispatchDataAction({
      type: "ADD NEW WORK DATA",
      value: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
        id: uniqid(),
      },
    });
  };

  const deleteWorkDataHandler = (id) => {
    dispatchDataAction({ type: "DELETE WORK ITEM", value: id });
  };

  const updateWorkHandler = useCallback(
    (id, data) => {
      const updatedWorkedu = { ...data, id: id };
      dispatchDataAction({
        type: "UPDATE WORK DATA",
        value: updatedWorkedu,
      });
    },
    [dispatchDataAction]
  );

  const dataContext = {
    personalInfo: dataState.personalInfo,
    educationInfo: dataState.educationInfo,
    workInfo: dataState.workInfo,
    addPersonalData: addPersonalDataHandler,
    addNewEducationData: addNewEducationDataHandler,
    deleteEducationData: deleteEducationHandler,
    updateEducationData: updateEducationHandler,
    addNewWorkData: addNewWorkDataHandler,
    deleteWorkData: deleteWorkDataHandler,
    updateWorkData: updateWorkHandler,
  };
  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
