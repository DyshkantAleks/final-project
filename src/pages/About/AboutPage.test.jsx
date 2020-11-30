import React from 'react';
import { shallow } from 'enzyme';

import { AboutPage } from './index';
import { AboutText } from './AboutPageComponents/AboutText';

const setUp = (props = {}) => shallow(<AboutPage {...props} />);

describe('AboutPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(AboutText);
    expect(wrapper.length).toEqual(1);
  });
});