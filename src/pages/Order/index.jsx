import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';
import { OrderCart } from './OrderCart';
import { Title } from '../../components/Title/Title';
import { ContentContainer } from '../../styles/GeneralStyledComponents';

import { confirmOrder } from '../../store/order/operations';
import { getProducts } from '../../store/products/operations';
import { checkQuantity } from '../../store/cart/operations';
import { selectProducts } from '../../store/products/selectors';
import { selectCart } from '../../store/cart/selectors';
import { openModal } from '../../store/modal/actions';
import { selectOrder } from '../../store/order/selectors';
import { ModalExistence } from '../../components/ModalExistence';

export const OrderPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const order = useSelector(selectOrder);
  const shortageProducts = checkQuantity(products, cart);

  if (shortageProducts.length) {
    dispatch(
      openModal({
        content: shortageProducts.map((item) => (
          <ModalExistence name={item.product.name} quantity={item.quantity} route={item.product.route} key={item.product.itemNo}/>
        ))
      })
    );
  }
  return (
    <ContentContainer>
      <Title text="Оформить заказ" />

      <ContainerPage>
        <ComponentContainer>
          <ContactForm
            handleSubmit={(val) => {
              dispatch(confirmOrder(val));
              setTimeout(
                () => console.log(order),
                  // dispatch(
                  //   openModal({
                  //     content: <h2> Ваш заказ № {order.orderNo} принят</h2>,
                  //   })
                  // ),
                500
              );
            }}
          />
        </ComponentContainer>
        <ComponentContainer>
          <OrderCart />
        </ComponentContainer>
      </ContainerPage>
    </ContentContainer>
  );
};

const ComponentContainer = styled.div`
  @media ${device.desktop} {
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
  } ;
`;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media ${device.desktop} {
    justify-content: space-between;
    flex-direction: row;
  } ;
`;