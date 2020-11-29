import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '.';
import { FooterContainer, InfoContainer, StyledFooter } from './StyledFooter';
import { FooterLogo } from './FooterLogo';

const setUp = (props) => shallow(<Footer {...props} />)

describe('Footer component', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  });

  it('should be render with wrapper', () => {
    const wrapper = component.find(StyledFooter);
    expect(wrapper.length).toEqual(1)
  });

  it('should be render with footer', () => {
    const footer = component.find(FooterContainer);
    expect(footer.length).toEqual(1)
  });

  it('should be render with logo', () => {
    const logo = component.find(FooterLogo);
    expect(logo.length).toEqual(1)
  });
    
  it('should be render with Info', () => {
    const info = component.find(InfoContainer);
    expect(info.length).toEqual(1)
  });
});