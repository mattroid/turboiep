jest.dontMock('../SurveyPage'); // eslint-disable-line no-undef

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const SurveyPage = require('../SurveyPage');

describe('profile questionItems', () => {

  it('should turn green when clicked', () => {

    const surveyPage = TestUtils.renderIntoDocument(
      <SurveyPage />
    );

    const surveyPageNode = ReactDOM.findDOMNode(surveyPage);
  });

});
