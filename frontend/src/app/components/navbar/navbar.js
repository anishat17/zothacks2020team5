import React from 'react'
import { NavLink } from "react-router-dom";
import "./navbar.scss"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/watchlist" exact={true}>
            Liked
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/explore" exact={true}>
            Movies
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/" exact={true}>
            Settings
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;