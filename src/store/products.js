export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADER = 'SET_LOADER';

export const MODULE_NAME = 'products';
export const selectProducts = state => state[MODULE_NAME].products;
export const selectLoader = state => state[MODULE_NAME].isDataLoaded;

const InitialState = {
    products: [],
    isDataLoaded: false
};

export function reducer(state = InitialState, { type, payload }) {
    switch (type) {
        case SET_LOADER:
            return {
                ...state,
                isDataLoaded: true
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload, 
                isDataLoaded: false
            }
            default:
                return state
    }
}

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});
export const setLoader = () => ({
    type: SET_LOADER
})

export const getProductList = () => async dispatch => {
    try {
           dispatch(setLoader());
            const res = await fetch('./db.json');
            const data = await res.json();   
            dispatch(setProducts(data));

    } catch (err) {
        console.log(err);
    }
}
