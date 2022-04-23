import React from "react";
import style from "./pdfStyle";
import { View, Text } from "@react-pdf/renderer";

const EducationItem = ({ data }) => {
  return (
    <View style={style.academic_item}>
      <Text style={style.academic_title}>{data.degree}</Text>
      <Text style={style.academic_title}>({data.subject})</Text>
      <View>
        <Text style={style.academic_text}>{data.universityName}</Text>
        <View style={style.academic_subsection}>
          <Text style={style.academic_subtext}>
            {data.from} - {data.to} | {data.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EducationItem;
