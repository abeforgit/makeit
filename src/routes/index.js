import React from 'react'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import RegistrationRoute from './Register'
import { Route } from 'react-router-dom'

export const createRoutes = (store) => (
  <div>
    <CoreLayout/>
    <Route exact path='/' component={Home}/>
    <Route path ='/register' component={RegistrationRoute}/>
  </div>
    );

export default createRoutes;
