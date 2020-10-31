import React, {useEffect} from "react";
import {Header} from "../../commons/Header/Header";
import {PromoList} from "../../components/Promotions/PromoList";
import {useDispatch} from "react-redux";
import {getPromotionsList} from "../../store/promotions/actions";
import {getPromotions} from "../../store/promotions/middlware";
import {Footer} from "../../commons/Footer";

export const PromotionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromotions())
  }, []);

  return (
    <>
      <Header/>
      <h1>Promotions page</h1>
      <PromoList/>
      <Footer/>
    </>
  )
}