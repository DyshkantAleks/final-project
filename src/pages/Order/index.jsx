import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { ContactForm } from '../../forms/ContactForm/ContactForm';
import { OrderCart } from './OrderCart';
import { Title } from '../../components/Title/Title';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { confirmOrder } from '../../store/order/operations';
import { getProducts } from '../../store/products/operations';
import { checkQuantity } from '../../store/cart/operations';
import { selectProducts } from '../../store/products/selectors';
import { selectCart } from '../../store/cart/selectors';
import { openModal } from '../../store/modal/actions';
import { ModalExistence, ModalExistenceActions } from '../../components/Modal/ModalExistence';
import { ScrollOnTop } from '../../components/ScrollOnTop';

export const OrderPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const shortageProducts = checkQuantity(products, cart);

  if (shortageProducts.length) {
    dispatch(
      openModal({
        content: <ModalExistence shortageProducts={shortageProducts}/>,
        actions: <ModalExistenceActions />
      })
    );
  }
  return (
    <ContentContainer>
      <ScrollOnTop />
      <Title text="Оформить заказ" />
      <ContainerPage>
        <ComponentContainerL>
          <ContactForm
            handleSubmit={(val) => {
              dispatch(confirmOrder(val));
            }}
          />
        </ComponentContainerL>
        <ComponentContainerR>
          <OrderCart />
        </ComponentContainerR>
      </ContainerPage>
    </ContentContainer>
  );
};

const ComponentContainerL = styled.div`
  flex-grow: 1;
  @media ${device.desktop} {
    margin-right: 4rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
  } ;
`;

const ComponentContainerR = styled.div`
  flex-grow: 1;
  @media ${device.desktop} {
    margin-left: 4rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  } ;
`;

const ContainerPage = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column-reverse;
  @media ${device.desktop} {
    justify-content: space-between;
    flex-direction: row;
  } ;
`;