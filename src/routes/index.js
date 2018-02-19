import React from 'react';
import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import RegistrationRoute from './Register';
import TermsView from './Terms';
import { Route } from 'react-router-dom';
import PrivacyView from './Privacy/components/PrivacyView';

export const createRoutes = store => (
  <div>
    <CoreLayout />
    <Route exact path="/" component={Home} />
    <Route path="/register" component={RegistrationRoute} />
    <Route path="/terms-of-use" component={TermsView} />
    <Route path="/privacy" component={PrivacyView} />
  </div>
);

export default createRoutes;
