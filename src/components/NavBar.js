import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/dogs">Breeds</NavLink>
            <NavLink exact to="/dogs/new">Add New Breed</NavLink>
        </nav>
    );
}

export default NavBar;