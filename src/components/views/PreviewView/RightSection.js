import React from "react";
import { View, Text } from "@react-pdf/renderer";
import style from "./pdfStyle";
import EducationItem from "./EducationItem";
import WorkItem from "./WorkItem";

const RightSection = ({ educationData, workData }) => {
  return (
    <View style={style.section_right}>
      <View style={style.education_section}>
        <Text style={style.eduWork_title}>Education History</Text>
        <View style={style.eduWork_line} />
        {educationData.map((dataWork) => (
          <EducationItem key={dataWork.id} data={dataWork} />
        ))}
      </View>
      {workData.length > 0 && (
        <View style={style.work_section}>
          <Text style={style.eduWork_title}>Work History</Text>
          <View style={style.eduWork_line} />
          {workData.map((dataWork) => (
            <WorkItem key={dataWork.id} data={dataWork} />
          ))}
        </View>
      )}
    </View>
  );
};

export default RightSection;
