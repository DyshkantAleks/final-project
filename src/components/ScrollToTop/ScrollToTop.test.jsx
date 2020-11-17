import React from 'react';
import { shallow } from 'enzyme';

import { ScrollToTop } from '.';
import { ScrollToTopContainer } from './StyledScrollToTop';
import { ScrollIcon } from './ScrollIcon';


const setUp = (props) => shallow(<ScrollToTop {...props} />)

describe('ScrollToTop component', () => {
    let component;

    beforeEach(() => {
        component = setUp()
    })
    it('should render without crashing', () => {
        const wrapper = component.find(ScrollIcon);
        expect(wrapper.length).toBe(0)

    })
})