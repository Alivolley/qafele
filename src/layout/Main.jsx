import React from "react";
import { useRoutes } from "react-router-dom";
import route from "../utils/axios";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Main = () => {
   const routes = useRoutes(route);

   return (
      <>
         <Header />
         {routes}
         <Footer />
      </>
   );
};

export default Main;
