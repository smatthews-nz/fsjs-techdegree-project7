import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <nav className="main-nav">
        <ul>
          <li><NavLink onClick={() => props.search('cats')} to="/cats">Cats</NavLink></li>
          <li><NavLink onClick={() => props.search('dogs')} to="/dogs">Dogs</NavLink></li> 
          <li><NavLink onClick={() => props.search('fish')} to="/fish">Fish</NavLink> </li>
        </ul>
    </nav>
)

export default Nav;