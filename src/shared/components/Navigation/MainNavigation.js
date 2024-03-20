import React from "react";
import MainHeader from "./MainHeader";
import './MainNavigation.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        SeusLugares
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
