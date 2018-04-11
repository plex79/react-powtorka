import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.methodDodaj = this.methodDodaj.bind(this);
    this.methodOdejmij = this.methodOdejmij.bind(this);
    this.methodResetuj = this.methodResetuj.bind(this);

    this.state = {
      liczba: 0
    };
  }

  methodDodaj() {
    this.setState((prev)=> {
      return {
        liczba: prev.liczba + 1
      }
    })
  }

  methodOdejmij() {
    this.setState((prev)=> {
      return {
        liczba: prev.liczba - 1
      }
    })
  }

  methodResetuj() {
    this.setState(() => {
      return {
          liczba: 0
      };
  });
  }

  render() {
    return (
      <div className="App">
        <Header name="plexxx" />
        <p className="App-intro">
          Some text
        </p>
        
        <h1>Liczba: {this.state.liczba}</h1>
        <button className="btnCount" type="button" onClick={this.methodDodaj}>+</button>
        <button className="btnCount" type="button" onClick={this.methodOdejmij}>-</button>
        <button className="btnReset" type="button" onClick={this.methodResetuj}>reset</button>
        
      </div>
    );
  }
}

App.defaultProps = {
    liczba: 50
}

export default App;
