import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QafeleText from "./../../components/svg/QafeleText";
import HambergerMenu from "./../../components/svg/HambergerMenu";
import scrollFinder from "./../../utils/scrollFinder";
import { Link } from "react-router-dom";
import { colors, radius } from "./../../utils/cssVars";

const Header = () => {
   const [topScroll, setTopScroll] = useState(0);

   useEffect(() => {
      window.addEventListener("scroll", () => scrollFinder(setTopScroll));

      return () => window.removeEventListener("scroll", () => scrollFinder(setTopScroll));
   }, []);

   return (
      <HeaderWrpper topScroll={topScroll}>
         <Logo>
            <QafeleText />
         </Logo>

         <Links>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Reserve</HeaderLink>
            <HeaderLink>Our services</HeaderLink>
            <HeaderLink>Contact us</HeaderLink>
            <HeaderLink>About us</HeaderLink>
         </Links>

         <Account>LOGIN / SIGN UP</Account>

         <HamberIcon>
            <HambergerMenu />
         </HamberIcon>
      </HeaderWrpper>
   );
};

export default Header;

const HeaderWrpper = styled.div`
   padding: 1rem 2.2rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   transition: all 0.4s;
   background: ${({ topScroll }) => (topScroll ? colors.mainLinear : "transparent")};

   @media screen and (min-width: 900px) {
      padding: 2rem 5.4rem;
   }
`;

const Logo = styled.div`
   width: 5.4rem;

   @media screen and (min-width: 600px) {
      width: 19rem;
   }
`;

const Links = styled.div`
   display: none;
   gap: 1rem;
   font-size: 1.4rem;

   @media screen and (min-width: 900px) {
      display: flex;
   }

   @media screen and (min-width: 1050px) {
      gap: 2rem;
      font-size: 1.6rem;
   }

   @media screen and (min-width: 1200px) {
      gap: 6rem;
   }
`;

const HeaderLink = styled(Link)`
   text-decoration: none;
   color: black;
`;

const Account = styled.button`
   display: none;
   font-size: 1.8rem;
   padding: 1.5rem 2rem;
   border-radius: ${radius.mainRadius};
   border: none;
   background-color: ${colors.btnColor};
   color: white;
   font-weight: 700;

   @media screen and (min-width: 900px) {
      display: block;
   }
`;

const HamberIcon = styled.div`
   @media screen and (min-width: 900px) {
      display: none;
   }
`;
