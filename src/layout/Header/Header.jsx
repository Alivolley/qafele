import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Header = () => {
   return (
      <HeaderWrpper>
         <Grid container>
            <Grid item xs={4}>
               <Logo>sonrohreoi</Logo>
            </Grid>
            <Grid item xs={4}>
               <Links>sonrohreoi</Links>
            </Grid>
            <Grid item xs={4}>
               <Account>sonrohreoi</Account>
            </Grid>
         </Grid>
      </HeaderWrpper>
   );
};

export default Header;

const HeaderWrpper = styled.div`
   padding: 1rem 2.2rem;

   @media screen and (min-width: 900px) {
      padding: 4rem 5.4rem;
   }
`;

const Logo = styled.div``;

const Links = styled.div``;

const Account = styled.div``;
