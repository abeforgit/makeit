import React from 'react';
import RegistrationForm from '../containers/RegistrationFormContainer';
import '../../../styles/components/routes/register/_RegistrationView.scss';

class RegistrationView extends React.Component {
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
    return <RegistrationForm onSubmit={this.submit} />;
  }
}

export default RegistrationView;
