import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './NavLinks.css'

const NavLinks = props =>{
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>VIAJANTES</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">MEUS LUGARES</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ADICIONAR LUGAR</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTENTICAR</NavLink>
        </li>
    </ul>
}

export default NavLinks;