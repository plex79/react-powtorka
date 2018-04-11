import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

const Header = (props) => {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {props.name}</h1>
        </header>
    )
}

export default Header;