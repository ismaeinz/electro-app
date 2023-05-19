import React from "react";
import Header from "./header/Header";
import NavBarCollection from "./collection/NavBarCollection";
import SlideCollection from "./collection/SlideCollection";
import "./Electro.css";
import { BrowserRouter } from "react-router-dom";

const Electro = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBarCollection />
        <SlideCollection />
      </BrowserRouter>
    </>
  );
};

export default Electro;
