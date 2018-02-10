import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './LoginForm.js'





class LoginPage extends React.Component {
    submit = function(values){
        console.log(values)
    };

    render(){
        return <LoginForm onSubmit={this.submit} />
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoginPage/>
      </div>
    );
  }
}

export default App;
