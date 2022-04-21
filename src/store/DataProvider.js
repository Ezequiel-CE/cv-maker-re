import React, { useReducer, useCallback } from "react";
import DataContext from "./data-context";
import uniqid from "uniqid";

const initialDataState = {
  personalInfo: {
    firstName: "",
    lastName: "",
    profession: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  educationInfo: [
    {
      universityName: "",
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
  if (action.type === "UPDATE PERSONAL DATA") {
    const updatedPersonalInfo = {
      ...state.personalInfo,
      [action.field]: action.value,
    };
    return { ...state, personalInfo: updatedPersonalInfo };
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
    const educationFormIndex = state.educationInfo.findIndex(
      (dataEdu) => dataEdu.id === action.id
    );
    //change the object
    const updatedEducationInfo = state.educationInfo[educationFormIndex];
    updatedEducationInfo[action.field] = action.value;
    //add the object to a copy and replace state
    const newEducationData = [...state.educationInfo];
    newEducationData[educationFormIndex] = updatedEducationInfo;
    return { ...state, educationInfo: newEducationData };
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

  const updatePersonalDataHandler = (e) => {
    const { name, value } = e.target;
    dispatchDataAction({
      type: "UPDATE PERSONAL DATA",
      field: name,
      value,
    });
  };

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

  const updateEducationInfoHandler = (e, id) => {
    const { name, value } = e.target;

    dispatchDataAction({
      type: "UPDATE EDUCATION DATA",
      field: name,
      value,
      id,
    });
  };

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

  const contextValue = {
    personalInfo: dataState.personalInfo,
    educationInfo: dataState.educationInfo,
    workInfo: dataState.workInfo,
    updatePersonalInfo: updatePersonalDataHandler,
    addNewEducationData: addNewEducationDataHandler,
    deleteEducationData: deleteEducationHandler,
    updateEducationInfo: updateEducationInfoHandler,
    addNewWorkData: addNewWorkDataHandler,
    deleteWorkData: deleteWorkDataHandler,
    updateWorkData: updateWorkHandler,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
