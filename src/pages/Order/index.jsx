import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComponentContainerL, ComponentContainerR, ContainerPage } from './StyledOrderPage';


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