import React from 'react';
import {shallow} from 'enzyme';

import { Header } from './Header';
import { HeaderContainer } from './StyledHeader';
import { Logo } from './Logo/Logo';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { AccountInfoList } from './AccountInfo/AccountInfoList';

const setUp = (props) => shallow(<Header {...props} />)
describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(HeaderContainer);
    expect(wrapper.length).toEqual(1);
  });
  it('should be render with Logo', () => {
    const logo = component.find(Logo);
    expect(logo.length).toEqual(1);
  });
  it('should be render with MobileMenu', () => {
    const mobile = component.find(MobileMenu);
    expect(mobile.length).toEqual(1);
  });
  it('should be render with AccountInfoList', () => {
    const account = component.find(AccountInfoList);
    expect(account.length).toEqual(1);
  });
});