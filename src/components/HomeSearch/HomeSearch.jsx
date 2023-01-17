import DatePicker from "./../DataPicker/DataPicker";
import React, { useState } from "react";
import currentDate from "../../utils/currentDate";
import styled from "styled-components";
import { Autocomplete, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { colors, radius } from "./../../utils/cssVars";
import SearchIcon from "@mui/icons-material/Search";

const HomeSearch = () => {
   const [chosenStartDate, setChosenStartDate] = useState(currentDate);
   const [chosenFinishtDate, setChosenFinishtDate] = useState(currentDate);
   const [service, setService] = useState();

   const searchHandler = (e) => {
      e.preventDefault();
      console.log("object");
   };

   return (
      <HomeSearchWrapper onSubmit={searchHandler}>
         <SearchItem>
            <Label htmlFor="checkIn">Check in :</Label>
            <DatePicker id="checkIn" value={chosenStartDate} setValue={setChosenStartDate} />
         </SearchItem>

         <SearchItem>
            <Label htmlFor="checkOut">Check out :</Label>
            <DatePicker id="checkOut" value={chosenFinishtDate} setValue={setChosenFinishtDate} />
         </SearchItem>

         <SearchItem>
            <Label htmlFor="combo-box-demo">Medical services :</Label>
            <ChooseService
               disablePortal
               id="combo-box-demo"
               onChange={(e, val) => setService(val)}
               options={["The Shawshank Redemption", "The Godfather", "The Godfather: Part II", "The Dark Knight"]}
               renderInput={(params) => <TextField {...params} />}
            />
         </SearchItem>

         <ButtonSubmit variant="contained" type="submit">
            <SearchIcon fontSize="large" />
            Search
         </ButtonSubmit>
      </HomeSearchWrapper>
   );
};

export default HomeSearch;

const HomeSearchWrapper = styled.form`
   display: flex;
   flex-direction: column;
   gap: 5rem;
   margin: 2rem;
   margin-top: 0;
   padding: 3rem 5rem;
   border-radius: 40px;
   background: rgba(255, 255, 255, 0.7);
   box-shadow: 0px 4px 20px rgba(216, 210, 252, 0.64);

   @media screen and (min-width: 900px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding: 6rem 5rem;
   }

   @media screen and (min-width: 1200px) {
      margin-left: 15rem;
      margin-right: 15rem;
   }
`;

const SearchItem = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media screen and (min-width: 900px) {
      flex-basis: 25%;
   }
`;

const Label = styled.label`
   font-size: 1.8rem;
   font-weight: 700;

   @media screen and (min-width: 1200px) {
      font-size: 2rem;
   }
`;

const ChooseService = styled(Autocomplete)`
   background-color: #edf8fc;

   div {
      font-size: 1.8rem;
   }
`;

const ButtonSubmit = styled(LoadingButton)`
   background-color: ${colors.btnColor} !important;
   font-size: 1.8rem !important;
   box-shadow: 0px 2px 15px rgba(0, 86, 91, 0.2) !important;
   height: 5.8rem;
   border-radius: ${radius.mainRadius} !important;
   text-transform: capitalize !important;

   @media screen and (min-width: 900px) {
      flex-basis: 20%;
   }
`;
