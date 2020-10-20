export const SET_PROMOTIONS = 'SET_PROMOTIONS';

export const setPromotions = payload => ({
    type: SET_PROMOTIONS,
    payload
});


export const getPromotionsList = () => async dispatch => {
    try {
            const res = await fetch('./db_promo.json');
            const data = await res.json();
            dispatch(setPromotions(data.promotions));

    } catch (err) {
        console.log(err);
    }
};
