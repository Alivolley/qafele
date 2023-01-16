import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./layout/Main";

const App = () => {
   return (
      <BrowserRouter>
         <Main />
      </BrowserRouter>
   );
};

export default App;
