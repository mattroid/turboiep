/* global define, it, describe, expect */
jest.dontMock('../SurveyPage'); // eslint-disable-line no-undef

import React from 'react'
// import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const SurveyPage = require('../SurveyPage')

describe('profile page', () => {
  it('should exist', () => {
    const surveyPage = TestUtils.renderIntoDocument(
      <SurveyPage />
    );

    expect(TestUtils.isCompositeComponent(surveyPage)).toBeTruthy()
  });
});
