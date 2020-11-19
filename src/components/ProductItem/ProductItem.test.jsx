import React from 'react';
import {shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';


import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {ContainerItem} from './StyledProductItem';
import {ProductItem} from '.';




describe('<ProductItem/> component', () => {
    let store;
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
  
    beforeEach(() => {
      store = mockStore({});
    });
  
    it('should render correctly with wrapper', () => {
      const component = mount(
        <Provider store={store}>
          <ProductItem />
        </Provider>
      );
    console.log(component.debug())
    // const wrapper = component.find(ContainerItem);
    // expect(wrapper.length).toBe(1)
    });
  });


  

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