// import * as actions from './actions';
// import { getProducts } from './middlware';
// import { BASE_URL, server } from '../../API';


// import thunk from 'redux-thunk';
// import configureMockStore from 'redux-mock-store';

// import * as actions from './actions';
// import { getProducts } from './middlware';
// import { BASE_URL, server } from '../../API';
// import fetchMock from 'fetch-mock';
// import {setProducts} from './actions';

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// describe('Product middlware', () => {

//     afterEach(() => {
//         //   fetchMock.reset()
//         fetchMock.restore()
//     })

//     it('creates SET_PRODUCTS when fetching products has been done', () => {
//         fetchMock.getOnce(`${BASE_URL}/products`, {
//             headers: { 'content-type': 'application/json' },
//             body: { data: [1, 2, 3], status: 200 },
//         })

//         const expectedActions = {
//             type: actions.SET_PRODUCTS,
//             payload: [1, 2, 3]
//         };

//         const store = mockStore({ data: []});

//         return store.dispatch(getProducts(data))
//             .then(() => {
//                 console.log(store.getActions())
//                 expect(store.getActions()).toBe(expectedActions)
//             })
//     })

// })