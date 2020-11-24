import React from 'react';
import { shallow } from 'enzyme';
import { FooterCustomers } from '.';
import { StyledLink } from '../StyledFooter';

const setUp = (props) => shallow(<FooterCustomers {...props} />);

describe('FooterCustomers component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should be render with Link', () => {
    const wrapper = component.find(StyledLink)
    expect(wrapper.length).toBe(2)
  })
});