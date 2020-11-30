import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from './Logo';
import { Image, StyledLink } from './StyledLogo';

const setUp = (props) => shallow(<Logo {...props} />);

describe('Logo component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with Link', () => {
    const link = component.find(StyledLink);
    expect(link.length).toEqual(1);
    expect(link.prop('to')).toEqual('/');
  });
  it('should be render with logo', () => {
    const logo = component.find(Image);
    expect(logo.length).toEqual(1);
    expect(logo.prop('src')).toEqual('https://res.cloudinary.com/dg-home/image/upload/v1604312381/General/dg-home-logo_onswjp.png');
  });
});