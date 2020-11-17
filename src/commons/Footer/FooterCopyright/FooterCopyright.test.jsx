import React from 'react';
import { shallow } from 'enzyme';

import { FooterCopyright } from '.';
import { CopyrightContainer, CopyrightText } from '../StyledFooter';

const setUp = (props) => shallow(<FooterCopyright {...props} />)

describe('FooterCopyright component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    });
    it('should be render with wrapper', () => {
        const wrapper = component.find(CopyrightContainer);
        expect(wrapper.length).toEqual(1)
    });
    it('should be render with text', () => {
        const text = component.find(CopyrightText);
        expect(text.text()).toEqual('© FEM7, 2020. All rights reserved.')
    });
});