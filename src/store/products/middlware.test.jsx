import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

import * as actions from './actions';
import { getProducts } from './middlware';
import fetchMock from 'fetch-mock';
import { BASE_URL, server } from '../../API';
import expect from 'expect';

const middlwares = [thunk];

const mockStore = configureMockStore(middlwares);
describe('Product middlware', () => {

    afterEach(() => {
        fetchMock.reset(),
        fetchMock.restore()
    });

    it('creates SET_PRODUCTS when fetching products has been done', () => {
        fetchMock.getOnce(`${BASE_URL}/products`, {
            headers: {'content-type': 'application/json'},
            body: {data: [1,2,3], status: 'ok'}
        })

        const expectedActions = [{
            type: actions.SET_LOADER
          },
          {
            type: actions.SET_PRODUCTS,
            payload: [1,2,3]
          }];
         
        const store = mockStore({});

        return store.dispatch(getProducts()).then(() => {
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})