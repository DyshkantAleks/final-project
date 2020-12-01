import React from 'react';
import { shallow } from 'enzyme';

import { AboutPage } from './index';
import { AboutText } from './AboutPageComponents/AboutText';
import { ScrollOnTop } from '../../components/ScrollOnTop';

const setUp = (props = {}) => shallow(<AboutPage {...props} />);

describe('AboutPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without crushing and should have scroll on top', () => {
    const scrollTop = component.find(ScrollOnTop);
    expect(scrollTop.length).toEqual(1);
  });
  it('should be render with <AboutText />', () => {
    const wrapper = component.find(AboutText);
    expect(wrapper.length).toEqual(1);
  });
});