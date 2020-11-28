import React from 'react';
import { shallow } from 'enzyme';

import { FooterAbout } from '.';
import { Container, StyledLink } from '../StyledFooter';

const setUp = (props) => shallow(<FooterAbout {...props} />)

describe('FooterAbout component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(Container);
    expect(wrapper.length).toEqual(1);
  });

  it('should be render with links', () => {
    const links = component.find(StyledLink);
    expect(links.length).toEqual(2);
  });

  it('should be render with links text', () => {
    const links = component.find(StyledLink);
    expect(links.first().text()).toEqual('О нас');
    expect(links.last().text()).toEqual('Акции');
  });
});