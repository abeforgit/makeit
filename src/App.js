import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm.js';
import Header from './Header'
import { Route } from 'react-router-dom'

class LoginPage extends React.Component {
  submit = function(values) {
    let { firstName, lastName, email, createPass, country } = values;
    fetch('http://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        pass: createPass,
        country: country,
      }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <Route path="/register" component={LoginPage}/>
        </div>
      </div>
    );
  }
}

export default App;
