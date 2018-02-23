import React from 'react';
import Loadable from 'react-loadable'


const Loading = () => <div>Loading...</div>;

const RegistrationPage = Loadable({
  loader: () => import('./containers/RegistrationView'),
  loading: Loading,
  });

export default RegistrationPage