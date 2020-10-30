import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { PromoList } from '../../components/Promotions/PromoList';
import { getPromotions } from '../../store/promotions/middlware';

export const PromotionsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPromotions())
    }, [dispatch]);

    return (
        <>
            <Header />
            <h1>Promotions page</h1>
            <PromoList />
        </>
    )
}