import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import currentDate from "../../utils/currentDate";
import styled from "styled-components";

const DataPicker = ({ value, setValue }) => {
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePickerWrapper
            minDate={currentDate}
            maxDate={"2025-06-01"}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
         />
      </LocalizationProvider>
   );
};

export default DataPicker;

const DatePickerWrapper = styled(DatePicker)`
   background-color: #edf8fc;
   z-index: 0 !important;

   div {
      font-size: 1.8rem;
   }
`;
