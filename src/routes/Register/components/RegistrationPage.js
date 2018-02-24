import React from 'react';
import RegistrationForm from '../containers/RegistrationFormContainer';
import RegisterTitle from './RegisterTitle';

const submit = values => {
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

const RegistrationPage = () => (
  <div>
    <RegisterTitle />
    <RegistrationForm handleSubmit={submit} />
  </div>
);
export default RegistrationPage;
