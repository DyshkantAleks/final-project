import React, {useEffect} from "react";
import {Header} from "../../commons/Header/Header";
import {PromoList} from "../../components/Promotions/PromoList";
import {useDispatch} from "react-redux";
import {getPromotionsList} from "../../store/promotions/actions";

export const PromotionsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPromotionsList())
    }, []);

    return (
        <>
            <Header/>
            <h1>Promotions page</h1>
            <PromoList/>
        </>
    )
}