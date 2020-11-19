import { setProducts, setLoader } from './actions';
import * as actions from './actions';

describe('Product actions', () => {
    it('setProducts(): should attach products', () => {
        const expectedAction = {
            type: actions.SET_PRODUCTS,
            payload: [1, 2, 3]
        };
        expect(setProducts(expectedAction.payload)).toEqual(expectedAction)
    });
    it('setLoader(): should create an action to set isDataLoaded', () => {
        const expectedAction = {
            type: actions.SET_LOADER,
        };
        expect(setLoader()).toEqual(expectedAction);
    });
});