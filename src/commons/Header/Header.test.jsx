import React from 'react';
import {shallow} from 'enzyme';

import { Header } from './Header';
import { HeaderContainer } from './StyledHeader';
import { Logo } from './Logo/Logo';

const setUp = (props) =>  shallow(<Header {...props} />)
describe('Header component', () => {
  let component;
  beforeEach(() => {
        component = setUp()
    })
    it('should be render with wrapper', () => {
        const wrapper = component.find(HeaderContainer);
        expect(wrapper.length).toEqual(1);
    });

    it('should be render with Logo', () => {
        const logo = component.find(Logo);
        expect(logo.length).toEqual(1)
    });
});