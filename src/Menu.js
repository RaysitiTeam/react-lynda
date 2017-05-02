import React, {Component} from 'react';
import {Link} from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDayIcon from 'react-icons/lib/fa/table';

const Menu = (props) =>{
    return(
        <nav className="navbar">
            <Link to="/" activeClassName="selected">
                <HomeIcon/> Home /
            </Link>
            <Link to="/form" activeClassName="selected">
                <AddDayIcon/> Add /
            </Link>
            <Link to="/list" activeClassName="selected">
                <ListDayIcon/> List /
            </Link>
        </nav>
    );
};//end:Menu

export default Menu;