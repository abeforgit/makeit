import React from 'react';
import Loadable from 'react-loadable'


const Loading = () => <div>Loading...</div>;

const RegistrationPage = Loadable({
  loader: () => import('./components/RegistrationPage'),
  loading: Loading,
  });

export default RegistrationPage