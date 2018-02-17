import React from 'react';
import { Field } from 'redux-form';
import CountrySelection from './CountrySelection';
import { required, matchPW, validEmail } from '../modules/InputValidation';
import  TextBox from './TextBox';
import PropTypes from 'prop-types'

const RegistrationForm = ( props ) => {
  const { handleSubmit } = props;
  return (<form onSubmit={handleSubmit}>
    <div>
      <Field
        name="email"
        component={TextBox}
        type="text"
        validate={[required, validEmail]}
      />
    </div>
    <div>
      <Field
        name="firstName"
        component={TextBox}
        type="text"
        validate={required}
      />
    </div>
    <div>
      <Field
        name="lastName"
        component={TextBox}
        type="text"
        validate={required}
      />
    </div>
    <div>
      <Field
        name="createPass"
        component={TextBox}
        type="password"
        validate={required}
      />
    </div>
    <div>
      <Field
        name="verifyPass"
        component={TextBox}
        type="password"
        validate={[required, matchPW]}
      />
    </div>
    <div>
      <Field
        name="country"
        component={CountrySelection}
        validate={required}
      />
    </div>

    <button type="submit">Submit</button>
  </form>
  )};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default RegistrationForm;
