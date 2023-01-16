import React from "react";
import styled from "styled-components";
import airplan from "./../../assets/images/airplan map.png";

const Home = () => {
   return (
      <div>
         <HeaderImage src={airplan} alt="" />
      </div>
   );
};

export default Home;

const HeaderImage = styled.img`
   width: 100%;
`;
