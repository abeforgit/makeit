import React from "react";
import LoginForm from './LoginForm.js';

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

export default LoginPage;