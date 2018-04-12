import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="App-header">
            <div className="menu">
                <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
            </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {props.name}</h1>
        </header>
    )
}

export default Header;