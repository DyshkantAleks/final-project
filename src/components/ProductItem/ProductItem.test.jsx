import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { ProductItem } from '.';

describe('<ProductItem />', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const wrapper = shallow(<Provider store={store}><ProductItem /></Provider>);
    describe('The ProductItem Component is render in Provider', () => {
        it('wrapper should contains <ProductItem /> ', () => {
            expect(wrapper.contains(<ProductItem />)).toBe(true);
        });
        it('wrapper should have one <ProductItem />', () => {
            const productItem = wrapper.find(ProductItem);
            expect(productItem.length).toEqual(1);
        });
    });
});