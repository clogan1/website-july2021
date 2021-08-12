import React from 'react'
import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <div class="ui inverted segment">
            <div class="ui inverted secondary pointing menu">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/projects">Projects</NavLink>
            <NavLink exact to="/resume">Resume</NavLink>
            </div>
        </div>
    )
}
export default Nav
