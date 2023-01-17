import { colors } from "./../../utils/cssVars";
import React from "react";
import styled from "styled-components";
import HomeSearch from "../../components/HomeSearch/HomeSearch";
import airplan from "./../../assets/images/airplan map.png";

const Home = () => {
   return (
      <HomeWrapper>
         <HeaderImage src={airplan} alt="" />
         <HomeSearch />
      </HomeWrapper>
   );
};

export default Home;

const HomeWrapper = styled.div`
   background: ${colors.mainLinear};
   padding-bottom: 60rem;
`;

const HeaderImage = styled.img`
   width: 100%;
`;
