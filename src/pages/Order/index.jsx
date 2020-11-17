import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { Header } from '../../commons/Header/Header';
import { ContactForm } from '../../components/forms/ContactForm/ContactForm';
import { OrderCart } from './OrderCart';

import { Title } from '../../components/Title/Title';
import { ContentContainer } from '../../styles/GeneralStyledComponents';

import { confirmOrder } from '../../store/order/middlware';
import { getProducts } from '../../store/products/middlware';
import { checkQuantity } from '../../store/cart/middlware';
import { selectProducts } from '../../store/products/selectors';
import { selectCart } from '../../store/cart/selectors';
import { openModal } from '../../store/modal/actions-creators';

export const OrderPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const shortageProducts = checkQuantity(products, cart);

  if (shortageProducts.length) {

    dispatch(
      openModal({
        content: shortageProducts.map((item) => (
          <ModalContentWrapper>
            <ModalTitle>Товара 
              <ItemInnerWrapper> {item.product.name.toLowerCase()} </ItemInnerWrapper>
                не хватает на складе. <br/>
                </ModalTitle>
                <ModalTitle>Доступно в количестве {item.quantity}</ModalTitle>
           
          </ModalContentWrapper>
        )),
      })
    );
  }
  return (
    <ContentContainer>
      <Header />
      <Title text='Оформить заказ' />
      <ContainerPage>
        <ContactForm
          handleSubmit={(val) => {
            dispatch(confirmOrder(val));
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


const ModalContentWrapper = styled.div`
padding: 3rem 1.5rem;
text-align: center
`

const ModalTitle = styled.h2`
font-size: 1.1em;
margin-bottom: 2rem;
`

const ItemInnerWrapper = styled.span`
color: #7191A6;
font-weight: 700;
`