import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { ModalWrapper, ContentWrapper, ModalTitle, StyledLink, ProductNameList, ItemInnerWrapper, ActionsWrapper } from './StyledModalExistence';
import { Button } from '../../Button';
import { closeModal } from '../../../store/modal/actions.jsx';

export const ModalExistence = (props) => {
  const { shortageProducts } = props;
  const dispatch = useDispatch();
  const closeModalHandler = () => dispatch(closeModal());

  const productName = shortageProducts.map(item => (
    <ProductNameList key={item.product.itemNo}>
      <StyledLink to={`/products/${item.product.route}`} onClick={closeModalHandler}>
        {item.product.name}
      </StyledLink>
      <ItemInnerWrapper>{item.product.quantity}{' '}шт</ItemInnerWrapper>
    </ProductNameList>));

  return (
    <ModalWrapper>
      <ContentWrapper>
        <ModalTitle>Товара(ов): {productName}
        не хватает на складе &#9785;. Вы можете &laquo;Продолжить покупки&raquo; или же &laquo;Оставте заявку&raquo; и наш менеджер свяжеться с Вами, как только товар появится в наличии.
        </ModalTitle>
      </ContentWrapper>
    </ModalWrapper>
  )
};

export const ModalExistenceActions = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal())
  }
  return (
    <ActionsWrapper>
      <Button color='true' text={'Продолжить покупки'}
        onClick={() => {
          history.push('/catalog/all');
          closeModalHandler()
        }} />
      <Button color='true' text={'Оставить заявку'} />
    </ActionsWrapper>
  )
};