import RegistrationForm from '../components/RegistrationForm';
import { reduxForm } from 'redux-form';

export default reduxForm({
  form: 'login',
})(RegistrationForm);
