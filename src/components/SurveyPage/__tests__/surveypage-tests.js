jest.dontMock('../SurveyPage');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const SurveyPage = require('../SurveyPage');

describe('profile questionItems', () => {

  it('should turn green when clicked', () => {

    var surveyPage = TestUtils.renderIntoDocument(
      <SurveyPage />
    );

    var surveyPageNode = ReactDOM.findDOMNode(surveyPage);

    // Verify that it's Off by default
    //expect(checkboxNode.textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    //TestUtils.Simulate.change(
    //  TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    //);
    //expect(checkboxNode.textContent).toEqual('On');
  });

});
