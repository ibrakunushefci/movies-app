import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

class Navbar extends Component {
   render() {
      return (
         <ul>
            <li>
               <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
               <NavLink exact to="/about" activeClassName="selected">About</NavLink>
            </li>
         </ul>
      )
   }
}

export default Navbar