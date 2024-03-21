import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./MainNavigation.css";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const switchDrawer = ()=>{
        setDrawerIsOpen(!drawerIsOpen);
    }
  return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={switchDrawer}/>}
        
      <SideDrawer show={drawerIsOpen} onClick={switchDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={switchDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">ViagemShare</h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
