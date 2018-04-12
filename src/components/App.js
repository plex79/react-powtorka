import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

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

  componentDidMount() {
    const number = parseInt(localStorage.getItem('number'), 10);
    this.setState(() => {
        return (
            {liczba: number}
        )
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    const number = this.state.liczba;
    localStorage.setItem('number', number);
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



export default App;
