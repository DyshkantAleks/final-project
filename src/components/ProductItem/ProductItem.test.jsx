import React from 'react';
import { shallow, mount, render} from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { ContainerItem, PhotoBox } from './StyledProductItem';
import { ProductItem } from '.';
import { createStore } from 'redux';
import { MODULE_NAME as cartModuleName } from '../../store/cart/selectors';
import { reducer as cartReducer } from '../../store/cart/reducer';

describe('<ProductItem />', () => {
    const mockStore = configureMockStore();
    const store = mockStore({})
    const wrapper = shallow(<Provider store={store}><ProductItem /></Provider>)
    describe('The ProductItem Component is render in Provider', () => {
        it('wrapper should contains <ProductItem /> ', () => {
            expect(wrapper.contains(<ProductItem />)).toBe(true);
        });

        it('wrapper should have one <ProductItem />', () => {
            const productItem = wrapper.find(ProductItem);
            // console.log(productItem.debug())
            expect(productItem.length).toEqual(1)
        });
    });

    // describe('<ProductItem /> component', () => {
    //         it('renders <ProductItem /> template', () => {
    //             const context = { store };
    //             const component = mount((<Provider store={store}><ProductItem store={context} /></Provider>), {
    //                 context: { context }
    //             });
    //             const productItem = component.find(ProductItem);
    //             // console.log(productItem.debug())
    //             // expect(productItem).toHaveLength(1)
    //             // const elem = wrapper.find(ContainerItem)
    //             // console.log(elem.debug())
                
    //             // console.log(elem.children())
    //             // expect(elem.children()).toEqual({})
    //         });
    //     });
});