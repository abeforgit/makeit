import React from 'react';
import { Field } from 'redux-form';
import CountrySelection from './CountrySelection';
import { required, matchPW, validEmail } from '../modules/InputValidation';
import TextBox from './TextBox';
import PropTypes from 'prop-types';
import EmailSubBox from './EmailSubBox';
import TermsCondBox from './TermsCondBox';

const RegistrationForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} method="POST" className="registrationForm">
      <div>
        <Field
          name="email"
          label="Email address"
          component={TextBox}
          type="text"
          validate={[required, validEmail]}
        />
      </div>
      <div>
        <Field
          name="firstName"
          label="First Name"
          component={TextBox}
          type="text"
          validate={required}
        />
      </div>
      <div>
        <Field
          name="lastName"
          label="Last Name"
          component={TextBox}
          type="text"
          validate={required}
        />
      </div>
      <div>
        <Field
          name="createPass"
          label="Enter your password"
          component={TextBox}
          type="password"
          validate={required}
        />
      </div>
      <div>
        <Field
          name="verifyPass"
          label="Confirm your password"
          component={TextBox}
          type="password"
          validate={[required, matchPW]}
        />
      </div>
      <div>
        <Field
          name="country"
          label="Country of residence"
          component={CountrySelection}
          validate={required}
        />
      </div>
      <div>
        <Field name="emailSubscribe" component={EmailSubBox} />
      </div>

      <div>
        <Field name="termsCond" component={TermsCondBox} validate={required} />
      </div>

      <button type="submit" className="form-control">
        Submit
      </button>
    </form>
  );
};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
