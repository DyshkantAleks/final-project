import React from 'react';
import { shallow } from 'enzyme';
import { ScrollToTop } from '.';


const setUp = (props) => shallow(<ScrollToTop {...props} />)

describe('ScrollToTop component', () => {
    let component;

    beforeEach(() => {
        component = setUp()
    })
    it('should render without crashing', () => {
        const wrapper = component.find('div');
        expect(wrapper.length).toBe(0)

    })
})