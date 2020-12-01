import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './index';
import { LoaderContainer, LoaderText, Preloader } from './StyledLoader';

const setUp = (props) => shallow(<Loader {...props} />);

describe('<Loader /> component', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(LoaderContainer);
    expect(wrapper.length).toEqual(1);
  });
  it('should be includes preloader component', () => { 
    const preloader = component.find(Preloader);
    expect(preloader.length).toEqual(1);
  });
  it('should be render with text', () => {
    const loaderText = component.find(LoaderText);
    expect(loaderText.text()).toEqual('Загрузка...')
  });
});