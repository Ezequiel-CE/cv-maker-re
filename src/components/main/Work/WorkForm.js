// import React, { useContext, useReducer, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import DataContext from "../../../store/data-context";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Box from "@mui/material/Box";

// const WorkForm = ({ workData }) => {
//   const { deleteWorkData, updateWorkData } = useContext(DataContext);

//   const { id } = workData;
//   useEffect(() => {
//     updateWorkData(id, workState);
//   }, [workState, updateWorkData, id]);

//   const positionHandler = (e) => {
//     dispatchWorkAction({ type: "POSITION INPUT", value: e.target.value });
//   };
//   const companyHandler = (e) => {
//     dispatchWorkAction({ type: "COMPANY INPUT", value: e.target.value });
//   };
//   const cityHandler = (e) => {
//     dispatchWorkAction({ type: "CITY INPUT", value: e.target.value });
//   };
//   const fromHandler = (e) => {
//     dispatchWorkAction({ type: "FROM INPUT", value: e.target.value });
//   };
//   const toHandler = (e) => {
//     dispatchWorkAction({ type: "TO INPUT", value: e.target.value });
//   };

//   return (
//     <>
//       <form>
//         <TextField
//           name="position"
//           id="outlined-basic"
//           label="Position"
//           variant="outlined"
//           sx={{ backgroundColor: "white" }}
//           fullWidth={true}
//           margin="dense"
//           onChange={positionHandler}
//           value={workState.position}
//         />
//         <TextField
//           name="company"
//           id="outlined-basic"
//           label="Company"
//           variant="outlined"
//           fullWidth={true}
//           sx={{ backgroundColor: "white" }}
//           margin="dense"
//           onChange={companyHandler}
//           value={workState.company}
//         />
//         <TextField
//           name="city"
//           id="outlined-basic"
//           label="City"
//           variant="outlined"
//           fullWidth={true}
//           sx={{ backgroundColor: "white" }}
//           margin="dense"
//           onChange={cityHandler}
//           value={workState.city}
//         />
//         <TextField
//           name="from"
//           id="outlined-basic"
//           label="from"
//           variant="outlined"
//           sx={{ backgroundColor: "white" }}
//           fullWidth={true}
//           margin="dense"
//           onChange={fromHandler}
//           value={workState.from}
//         />
//         <TextField
//           name="to"
//           id="outlined-basic"
//           label="to"
//           variant="outlined"
//           sx={{ backgroundColor: "white" }}
//           fullWidth={true}
//           margin="dense"
//           onChange={toHandler}
//           value={workState.to}
//         />
//       </form>
//       <Box textAlign="end" sx={{ padding: "10px 0 20px 0" }}>
//         <Button
//           variant="outlined"
//           startIcon={<DeleteIcon />}
//           onClick={() => deleteWorkData(workData.id)}
//         >
//           Delete
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default WorkForm;
