import React from 'react';
import { shallow } from 'enzyme';
import { FooterLogo } from '.';
import { FooterLogoImg, FooterText } from '../StyledFooter';

const setUp = (props) => shallow(<FooterLogo {...props} />);

describe('FooterLogo component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
    
  it('should be render with text', () => {
    const wrapper = component.find(FooterText);
    expect(wrapper.text()).toEqual('Интернет-магазин итальянской мебели от лучших производителей');
  });

  it('should be render with logo', () => {
    const logo = component.find(FooterLogoImg);
    expect(logo.length).toEqual(1);
  });
});