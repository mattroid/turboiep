/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import SurveyPage from './components/SurveyPage';
import ProfileSummaryPage from './components/ProfileSummaryPage';
import StudentProfiles from './components/StudentProfiles';
import RegisterStudent from './components/SurveyPage/RegisterStudent';
import { Provider } from 'react-redux';
import configureStore from './stores';

const router = new Router(on => {
  on('*', async (state, next) => {
    const store = await configureStore()
    const component = await next();
    return component &&
      <Provider store={store}>
        <App context={state.context}>{component}</App>
      </Provider>;
  });

  on('/contact', async () => <ContactPage />);

  on('/profiles', async () => <StudentProfiles />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('/summary', async () => {
    const response = await fetch('/api/content?path=plep');
    const content = await response.text();
    return <ProfileSummaryPage summary={content} />;
  });

  on('/survey', async () => <SurveyPage />);

  on('/student/start', async () => <RegisterStudent />);

  on('*', async (state) => {
    const response = await fetch(`/api/content?path=${state.path}`);
    const content = await response.json();
    return response.ok && content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
