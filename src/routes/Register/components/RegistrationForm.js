import React from 'react';
import { Field } from 'redux-form';
import CountrySelection from './CountrySelection';
import { required, matchPW, validEmail } from '../modules/InputValidation';
import TextBox from './TextBox';
import PropTypes from 'prop-types';
import EmailSubBox from './EmailSubBox';
import TermsCondBox from './TermsCondBox';
import styles from '../styles/RegistrationForm.style.css';

const RegistrationForm = props => {
  const { handleSubmit } = props;
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className={styles.registrationForm}
    >
      <div>
        <Field
          name="email"
          label="Email address"
          component={TextBox}
          type="text"
          validate={[required, validEmail]}
        />

        <Field
          name="firstName"
          label="First Name"
          component={TextBox}
          type="text"
          validate={required}
        />

        <Field
          name="lastName"
          label="Last Name"
          component={TextBox}
          type="text"
          validate={required}
        />

        <Field
          name="createPass"
          label="Enter your password"
          component={TextBox}
          type="password"
          validate={required}
        />

        <Field
          name="verifyPass"
          label="Confirm your password"
          component={TextBox}
          type="password"
          validate={[required, matchPW]}
        />

        <Field
          name="country"
          label="Country of residence"
          component={CountrySelection}
          validate={required}
        />

        <Field name="emailSubscribe" component={EmailSubBox} />

        <Field name="termsCond" component={TermsCondBox} validate={required} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
