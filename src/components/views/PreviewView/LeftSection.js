import React from "react";
import { View, Text } from "@react-pdf/renderer";
import style from "./pdfStyle";

const LeftSection = ({ data }) => {
  return (
    <View style={style.section_left}>
      <View style={style.profile_container}>
        <Text
          style={style.name_text}
        >{`${data.firstName} ${data.lastName}`}</Text>

        <Text style={style.profession_text}>{data.profession}</Text>
      </View>
      <View style={style.profile_line} />

      <View style={style.about_container}>
        <Text style={style.about_title}>ABOUT ME</Text>
        <Text style={style.about_text}>{data.description}</Text>
      </View>
      <View style={style.profile_line} />
      <View style={style.about_container}>
        <Text style={style.about_title}>SKILLS</Text>
        <View style={style.skill_list}>
          {data.skills.map((skill) => (
            <Text key={skill.id}>{skill.item}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default LeftSection;
