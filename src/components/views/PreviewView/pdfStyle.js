import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Helvetica-Bold",
  },
  section_right: {
    margin: 10,
    padding: 10,
    paddingTop: 20,
    width: "65%",
  },
  section_left: {
    width: "35%",
    height: "100%",
    backgroundColor: "#084c41",
    padding: "50px 20px 20px 20px",
  },
  profile_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name_text: {
    paddingTop: "10px",
    paddingBottom: "5px",
    fontSize: "20px",
    fontWeight: "900",
    color: "white",
    textAlign: "center",
  },
  profession_text: {
    color: "#d1d5db",
    fontSize: "15px",
    marginTop: "10px",
  },
  about_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  about_title: {
    fontSize: "15px",
    color: "white",
    textAlign: "left",
    padding: "0 0 7px 0",
  },
  about_text: { color: "#d1d5db", fontSize: "10px" },
  skill_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  skill_list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "10px",
    color: "#d1d5db",
  },
  profile_img: {
    width: "60px",
    height: "60px",
    borderRadius: "90",
  },
  profile_line: {
    margin: "30px auto",
    width: "70%",
    height: "3px",
    backgroundColor: "#FFF",
    textAlign: "center",
  },
});

export default style;
