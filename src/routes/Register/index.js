import React from 'react'
import { Route } from 'react-router-dom'

export default (store) => (
<Route path='/register' getComponent={(nextstate, cb) => (
  import(/* webpackChunkName: "register" */ './components/RegistrationView')
    .then(RegistrationView => cb(null, RegistrationView)))}/>
);
