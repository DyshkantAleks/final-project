import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { device } from "../../styles/breakpoints/breakpoints";
import { Header } from "../../commons/Header/Header";
import { ContactForm } from "../../components/forms/ContactForm/ContactForm";
import { OrderCart } from "./OrderCart";

import { Title } from "../../components/Title/Title";
import { ContentContainer } from "../../styles/GeneralStyledComponents";

import { confirmOrder } from "../../store/order/middlware";
import { getProducts } from "../../store/products/middlware";
import { checkQuantity } from "../../store/cart/middlware";
import { selectProducts } from "../../store/products/selectors";
import { selectCart } from "../../store/cart/selectors";
import { openModal } from "../../store/modal/actions-creators";
import { selectOrder } from "../../store/order/selectors";
export const OrderPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const order = useSelector(selectOrder);
  const shortageProducts = checkQuantity(products, cart);
  if (shortageProducts.length) {
    dispatch(
      openModal({
        content: shortageProducts.map((item) => (
          <h2>
            не хватает на складе {item.product.name} в количистве
            {item.quantity}
          </h2>
        )),
      })
    );
  }
  console.log(order);
  return (
    <ContentContainer>
      <Header />
      <Title text="Оформить заказ" />
      <ContainerPage>
        <ContactForm
          handleSubmit={(val) => {
            dispatch(confirmOrder(val));
            setTimeout(
              () =>
                dispatch(
                  openModal({
                    content: <h2> Ваш заказ № {order.orderNo} принят</h2>,
                  })
                ),
              500
            );
          }}
        />
        <OrderCart />
      </ContainerPage>
    </ContentContainer>
  );
};

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tabletM} {
    justify-content: space-between;
    flex-direction: row;
  } ;
`;
