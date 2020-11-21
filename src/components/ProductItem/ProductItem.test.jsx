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
            console.log(productItem.debug())
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


// function renderWithRedux( ui, {initialState, store = createStore(cartReducer, initialState)} = {}) {
// return {
//     ...render(<Provider store={store}>{ui}</Provider>)
// }
// }

// describe('ProductItem Component (renderWithRedux)', () => {
//     it('should render item', () => {
//         const {getByTest} = renderWithRedux(<ProductItem />, {initialState: {cart: []}})
//     })
// })

// ============================================================

// describe('<ProductItem /> component', () => {
//     it('<ProductItem /> should have <li>', () => {
//         const context = { store };
//         const component = shallow((<Provider store={store}><ProductItem store={context} /></Provider>), {
//             context: { context }
//         });
//         const wrapper = component.find(ContainerItem);
//         console.log(wrapper)
//         const elem = component.children(ContainerItem)
//         console.log(elem.children())
//         // expect(elem.children()).toEqual({})
//     })
// });

// describe('<ProductItem/> component', () => {
//     // let store;
//     // const middlewares = [thunk];
//     // const mockStore = configureMockStore(middlewares);
//     // let cart=[products];
//     // let products = []
//     // beforeEach(() => {
//     //   store = mockStore({cart: products.map(itemCart => itemCart.product._id).some(itemId => itemId === id)});
//     // });
//     // let cart=[];
//     // let products =[]
//     // const mockStore = createStore(cartReducer, {cart : products.map((item) => console.log(item))});
//     //   const getWrapper = () => mount(
//     //     // <Provider store={mockStore}>
//     //     <Provider store={mockStore}>
//     //     <ProductItem />
//     //   </Provider>
//     // )
//     const mockStore = configureMockStore();
//     const store = mockStore({})
//     const wrapper = shallow(<Provider store ={store}><ProductItem/> </Provider>)
//     it('should render correctly with wrapper', () => {
//         expect(wrapper.contains(<ProductItem />)).toBe(true);
//     // const wrapeer = getWrapper();
//     // expect(wrapper.length).toBe(1)

//     // console.log(component.debug())
//     // const wrapper = component.find(ContainerItem);
//     // expect(wrapper.length).toBe(1)
//     });
//   });




// =============================================

// const ReduxProvider = ({ children, reduxStore }) => (
//   <Provider store={reduxStore}>{children}</Provider>
// )
// const store = configureStore();
//       const wrapper = ({ children }) => (
//         <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
//       );
//       const { result } = useSelector(() => {
//         useSaveAuthenticationDataToStorages(useDispatch());
//       }, { wrapper });


// jest.mock('react-redux', () => {
//     const ActualReactRedux = require.requireActual('react-redux');
//     return {
//         ...ActualReactRedux,
//         useSelector: jest.fn().mockImplementation(() => {
//             return mockState;
//         }),
//     };
// });



// =================================================

// window.matchMedia =
// window.matchMedia ||
// function() {
//     return {
//         matches: false,
//         addListener: function() {},
//         removeListener: function() {}
//     };
// };
// ============================================

// describe('<ProductItem /> component', () => {


//     const setUp = (props) => shallow(<ProductItem name='Hello' />)
//     let container;

//     beforeEach(() => {
//         container = setUp()
//     })
//     describe('should be render with container', () => {

//         it('renders <ProductItem/> wrapper',() => {

//             expect(container.text()).toEqual('Hello')
//         })

//     })
// })