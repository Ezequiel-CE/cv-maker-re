import React from "react";
import style from "./pdfStyle";
import { View, Text } from "@react-pdf/renderer";

const WorkItem = ({ data }) => {
  return (
    <View style={style.academic_item}>
      <Text style={style.academic_title}>{data.position}</Text>
      <View>
        <Text style={style.academic_text}>{data.company}</Text>
        <Text style={style.work_description}>- {data.description}</Text>

        <View style={style.academic_subsection}>
          <Text style={style.academic_subtext}>
            {data.from} - {data.to} | {data.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WorkItem;
